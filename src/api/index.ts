import { Router } from 'express';
import card from './card';

const router = Router();

router.use('/card', card);

export default router;
