import { Request, Response, NextFunction } from 'express';
import { uuidv7 } from 'uuidv7';
import { z } from 'zod';
import { User } from '~/models';
import { clowd9, withAuth } from '~/utils/clowd9-client';
import { clowd9Config } from '~/clowd9Config';

const flattenClowd9Card = (raw: any) => {
  const inner = raw?.card ?? {};
  return {
    ...inner,
    last_four: inner?.card_ending,
    expiration: '1229',
  };
};

const onboardCardBodySchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  address1: z.string(),
  city: z.string(),
  state: z.string(),
  postal_code: z.string(),
  country: z.string(),
  card_format: z.enum(['virtual', 'physical']).default('virtual'),
});

export const findOrCreateCard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const validation = onboardCardBodySchema.safeParse(req?.body);

    if (!validation?.success) {
      return res.status(400).json({ error: validation.error.format() });
    }

    const { email, card_format, first_name, last_name, phone, address1, city, state, postal_code, country } = validation.data;

    // find existing user
    const user = await User.findOne({ where: { email } });

    if (user && user?.toJSON()?.customer_id) {
      const { card_ids } = user.toJSON() as any;
      const cardId = card_ids?.[0];

      if (!cardId) {
        return res.status(200).json({ user: user.toJSON(), card: null });
      }

      const { data: card } = await withAuth(() =>
        clowd9.getCard({ card_id: cardId })
      );

      return res.status(200).json({ user: user.toJSON(), card: flattenClowd9Card(card) });
    }

    // onboard: creates customer + card in one call
    const customerId = uuidv7();
    const cardId = uuidv7();
    
    const { data } = await withAuth(() =>
      clowd9.onboardCard({
        customer: {
          customer_id: customerId,
          first_name,
          last_name,
          email,
          phone_number: phone,
          address: {
            address_line1: address1,
            city,
            state_county_or_province: state,
            post_code: postal_code,
            country_iso: country,
          },
          created_at: new Date().toISOString(),
        },
        product_id: clowd9Config.productId,
        card: {
          card_id: cardId,
          format: card_format,
          card_status: card_format === 'virtual' ? 'active' : 'inactive',
        },
        card_manufacturer_id: clowd9Config.cardManufacturerId,
      } as any)
    );

    const { customer_id, card_details } = data ?? {};
    const card_id = card_details?.card_id;

    const new_user = await User.create({
      first_name,
      last_name,
      email,
      token: null,
      cards: [],
      customer_id,
      card_ids: card_id ? [card_id] : [],
    });

    return res.status(201).json({
      user: new_user.toJSON(),
      card_id,
      data,
    });
  } catch (err) {
    next(err);
  }
};

const updateCardStatusBodySchema = z.object({
  status: z.enum([
    'active',
    'destroyed',
    'freeze',
    'administrative',
    'fraud',
    'stolen',
    'lost',
  ]),
  note: z.string().optional(),
});

export const updateCardStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cardId = req?.params?.cardId;

    if (!cardId) {
      return res.status(400).json({ error: 'cardId param is required' });
    }

    const validation = updateCardStatusBodySchema.safeParse(req?.body);

    if (!validation?.success) {
      return res.status(400).json({ error: validation.error.format() });
    }

    const { data } = await withAuth(() =>
      clowd9.setCardStatus(validation.data, { card_id: cardId })
    );

    return res.status(200).json({
      status: data,
    });
  } catch (err) {
    next(err);
  }
};

export const findCard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findOne({ where: { email: req?.query?.email } });

    if (!user) {
      return res.status(200).json({ user: null, card: null });
    }

    const { card_ids } = user.toJSON() as any;
    const cardId = card_ids?.[0];

    if (!cardId) {
      return res.status(200).json({ user: user.toJSON(), card: null });
    }

    const { data: card } = await withAuth(() =>
      clowd9.getCard({ card_id: cardId })
    );

    return res.status(200).json({ user: user.toJSON(), card: flattenClowd9Card(card) });
  } catch (err) {
    next(err);
  }
};

export const healthCheck = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { data } = await withAuth(() => clowd9.healthCheck());
    return res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};
