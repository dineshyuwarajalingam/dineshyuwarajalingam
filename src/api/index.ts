import { Router } from 'express';

import card from './card';
import transaction from './transaction';

const router = Router();

router.use('/card', card);
router.use('/transaction', transaction);

export default router;
