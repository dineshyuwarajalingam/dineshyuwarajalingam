import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
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

    // create a user
    const user = await marqetaClient.post('/users', req.body);

    const card = await marqetaClient.post('/cards', {
      card_product_token: 'test_token',
      user_token: user?.data?.token,
    });

    return res.status(200).json({
      user,
      card,
    });
  } catch (err) {
    next(err);
  }
};
