import { Router } from 'express';
import * as CardController from './card-controller';

const router = Router();

router.post('/findOrCreate', CardController.findOrCreateCard);

export default router;
