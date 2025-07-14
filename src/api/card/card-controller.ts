import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { User } from '~/models';
import { marqetaClient } from '~/utils/marqeta-client';

const findOrCreateCardBodySchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
});

// TODO: for find to work, we need to be connect to a db
// 1. find registered member
// 2. if found, get their card
// 3. if not found, register user and then create their card

export const findOrCreateCard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const validation = findOrCreateCardBodySchema.safeParse(req?.body);

    if (!validation?.success) {
      return res.status(400).json({ error: validation.error.format() });
    }

    // find user
    const user = await User.findOne({ where: { email: req?.body?.email } });

    if (user && user?.toJSON()?.token) {
      const token = user?.toJSON()?.token;
      const cardToken = user?.toJSON()?.cards?.[0]
      const marqetaUser = await marqetaClient.get(`/users/${token}`);
      const card = await marqetaClient.get(`/cards/${cardToken}`);
      return res.status(200).json({
        user: marqetaUser?.data,
        card: card?.data,
      });
    }

    // create a user
    const newUser = await marqetaClient.post('/users', req.body);

    const card = await marqetaClient.post('/cards', {
      card_product_token: 'test_token',
      user_token: newUser?.data?.token,
    });

    await User.create({
      first_name: newUser?.data?.first_name,
      last_name: newUser?.data?.last_name,
      email: newUser?.data?.email,
      token: newUser?.data?.token,
      cards: [card?.data?.token],
    });

    return res.status(201).json({
      user: newUser?.data,
      card: card?.data,
    });
  } catch (err) {
    next(err);
  }
};
