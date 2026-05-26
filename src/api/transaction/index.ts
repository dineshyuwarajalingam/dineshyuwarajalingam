import { Router, Request, Response, NextFunction } from 'express';
import * as TransactionController from './transaction-controller';
import * as Clowd9TransactionController from './clowd9-transaction-controller';

const router = Router();

const PROVIDER = process.env.CARD_PROVIDER ?? 'clowd9'; // 'marqeta' | 'clowd9'

function useProvider(
  marqeta: (req: Request, res: Response, next: NextFunction) => any,
  clowd9: (req: Request, res: Response, next: NextFunction) => any,
) {
  return (req: Request, res: Response, next: NextFunction) => {
    return PROVIDER === 'marqeta' ? marqeta(req, res, next) : clowd9(req, res, next);
  };
}

router.get('/', useProvider(TransactionController.getTransactions, Clowd9TransactionController.getClowd9Transactions));
router.post('/simulate', useProvider(TransactionController.simulateTransaction, Clowd9TransactionController.simulateClowd9Transaction));
router.post('/webhook', TransactionController.webhook);
router.delete('/webhook', TransactionController.disableWebhook);
router.post('/config', TransactionController.configurePGFS);

export default router;
