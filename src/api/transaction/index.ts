import { Router } from 'express';
import * as TransactionController from './transaction-controller';

const router = Router();

router.get('/', TransactionController.getTransactions);
router.post('/simulate', TransactionController.simulateTransaction);
router.post('/webhook', TransactionController.webhook);
router.delete('/webhook', TransactionController.disableWebhook);
router.post('/config', TransactionController.configurePGFS);

export default router;
