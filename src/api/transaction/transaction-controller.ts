import { Request, Response, NextFunction } from 'express';
import { User } from '~/models';
import { marqetaClient } from '~/utils/marqeta-client';
import { z } from 'zod';

export const getTransactions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req?.query;

    const userDocument = await User.findOne({ where: { email } });

    if (!userDocument) {
      return res.status(400).json({ error: 'user not found' });
    }

    const user = userDocument.toJSON();
    const [cardToken] = user?.cards;

    const transactions = await marqetaClient(
      `/transactions?card_token=${cardToken}`
    );

    return res.status(200).json({
      transactions: transactions?.data,
    });
  } catch (err) {
    next(err);
  }
};

const simulateTransactionBody = z.object({
  card_token: z.string().optional(),
  amount: z.number(),
  mid: z.string(),
});

export const simulateTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const validation = simulateTransactionBody.safeParse(req?.body);

    if (!validation?.success) {
      return res.status(400).json({ error: validation.error.format() });
    }

    if (!req?.query?.email) {
      return res
        .status(400)
        .json({ error: 'email is required as a query param' });
    }

    const body = { ...req.body };

    if (!body?.card_token) {
      const userDocument = await User.findOne({
        where: { email: req?.query?.email },
      });

      if (!userDocument) {
        return res.status(400).json({ error: 'user not found' });
      }

      const user = userDocument.toJSON();
      const [cardToken] = user?.cards;

      body['card_token'] = cardToken;
    }

    const response = await marqetaClient.post(
      'simulate/authorization',
      body
    );

    if (response?.data?.transaction?.state == 'PENDING') {
      const completedTransation = await marqetaClient?.post(
        '/simulate/clearing',
        {
          amount: req?.body?.amount,
          original_transaction_token: response?.data?.transaction?.token,
        }
      );

      return res.status(201).json({
        transaction: completedTransation?.data,
      });
    }

    return res.status(201).json({
      transaction: response?.data,
    });
  } catch (err) {
    next(err);
  }
};

export const webhook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let body = req?.body;

    if (req?.body?.transactions?.length) {
      body = req?.body?.transactions?.[0];
    }

    return res.status(200).json({
      approved: true,
      state: 'COMPLETED',
      funding: {
        amount: body?.amount,
        currency_code: body?.currency_code,
      },
      token: body?.gpa_order?.token,
      jit_funding: body?.gpa_order?.jit_funding,
    });
  } catch (err) {
    next(err);
  }
};

export const disableWebhook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const webhooks = await marqetaClient.get('/webhooks');

    if (req?.query?.token) {
      await marqetaClient.put(`/webhooks/${req?.query?.token}`, {
        active: false,
      });
    }

    return res.status(200).json({
      webhooks: webhooks?.data,
    });
  } catch (err) {
    next(err);
  }
};

export const configurePGFS = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pgfs = await marqetaClient.post('/fundingsources/programgateway', {
      name: 'my_updated_pgfs',
      ...req?.body,
      active: true,
    });

    return res.status(200).json({
      message: 'configuration updated',
    });
  } catch (err) {
    next(err);
  }
};
