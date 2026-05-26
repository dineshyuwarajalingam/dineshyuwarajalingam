import { Request, Response, NextFunction } from 'express';
import { randomUUID } from 'crypto';
import { z } from 'zod';
import { User, Transaction } from '~/models';
import { clowd9, withAuth } from '~/utils/clowd9-client';

const simulateTransactionBody = z.object({
  amount: z.number(),
  merchant_name: z.string().optional(),
  merchant_city: z.string().optional(),
  merchant_country_code: z.string().optional(),
  mcc: z.string().optional(),
});

export const getClowd9Transactions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req?.query;

    if (!email) {
      return res.status(400).json({ error: 'email is required as a query param' });
    }

    const userDocument = await User.findOne({ where: { email } });

    if (!userDocument) {
      return res.status(400).json({ error: 'user not found' });
    }

    const transactions = await Transaction.findAll({
      where: { email },
      order: [['createdAt', 'DESC']],
    });

    const data = transactions.map((t) => {
      const row = t.toJSON() as any;
      return {
        token: row.transaction_id,
        type: 'gpa.credit',
        created_time: row.createdAt,
        amount: Number(row.amount),
        card_id: row.card_id,
        customer_id: row.customer_id,
        payload: row.payload,
      };
    });

    return res.status(200).json({
      transactions: { data, count: data.length },
    });
  } catch (err) {
    next(err);
  }
};

export const simulateClowd9Transaction = async (
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

    const userDocument = await User.findOne({
      where: { email: req.query.email },
    });

    if (!userDocument) {
      return res.status(400).json({ error: 'user not found' });
    }

    const user = userDocument.toJSON() as any;
    const cardId = user?.card_ids?.[0];

    if (!cardId) {
      return res.status(400).json({ error: 'user has no card on file' });
    }

    const { data: card } = await withAuth(() =>
      clowd9.getCard({ card_id: cardId })
    );

    const { amount, merchant_name, merchant_city, merchant_country_code, mcc } =
      validation.data;

    const now = new Date();
    const transmissionDate = `${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
    const transmissionTime = `${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}${String(now.getSeconds()).padStart(2, '0')}`;
    const authCode = String(Math.floor(Math.random() * 999999)).padStart(6, '0');
    const stan = String(Math.floor(Math.random() * 999999)).padStart(6, '0');
    const rrn = String(Math.floor(Math.random() * 999999999999)).padStart(12, '0');
    const networkTxnId = String(Math.floor(Math.random() * 999999999999999)).padStart(15, '0');

    const transaction = {
      message_type: 'authorization',
      message_qualifier: 'request',
      source: 'visa',
      card: {
        card_id: cardId,
        card_form_factor: (card as any)?.card_form_factor ?? 'virtual',
        card_status: (card as any)?.card_status ?? 'active',
        card_ending: (card as any)?.card_ending ?? '0000',
      },
      customer: {
        customer_id: user.customer_id,
      },
      transaction: {
        credential_on_file: 'n',
        transaction_type: '00',
        transaction_service: 'Goods and Service',
        transaction_id: randomUUID(),
        system_trace_audit_number: stan,
        retrieval_reference_number: rrn,
        network_transaction_id: networkTxnId,
        transmission_date: transmissionDate,
        transmission_time: transmissionTime,
        transaction_local_date: transmissionDate,
        transaction_local_time: transmissionTime,
        transaction_amount: String(amount),
        transaction_currency_code: '826',
        cardholder_billing_amount: String(amount),
        cardholder_billing_currency_code: '826',
        cardholder_billing_conversion_rate: '1',
        from_account: 'default',
        to_account: 'default',
        eci: '0',
        dcc_indicator: 'n',
        chip_indicator: 'contact',
        pin_indicator: 'offline_passed',
        '3ds_indicator': 'n',
        avs_outcome: 'n',
        sca_indicator: 'n',
        partial_approval_supported: 'n',
        cardholder_condition: '00',
        authorization_code: authCode,
        transaction_link_id: networkTxnId,
        status: {
          response_code: '000',
          response_source: 'clowd9',
          response_reason: 'Approved',
        },
      },
      acquirer: {
        acquiring_institution_id_code: '444444',
        acquiring_institution_country_code: merchant_country_code ?? '826',
        merchant_category_code: mcc ?? '5411',
        card_acceptor_terminal_id: 'SIMULATED',
        card_acceptor_id: 'SIM_MERCHANT_01',
        card_acceptor_name: merchant_name ?? 'Simulated Merchant',
        card_acceptor_city: merchant_city ?? 'LONDON',
        card_acceptor_country_code: merchant_country_code ?? 'GB',
      },
    };

    await Transaction.create({
      transaction_id: transaction.transaction.transaction_id,
      card_id: cardId,
      customer_id: user.customer_id,
      email: req.query.email,
      amount,
      payload: transaction,
    });

    return res.status(201).json({ transaction });
  } catch (err) {
    next(err);
  }
};
