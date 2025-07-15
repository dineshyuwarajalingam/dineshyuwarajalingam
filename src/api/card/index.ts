import { Router } from 'express';
import * as CardController from './card-controller';

const router = Router();

router.post('/findOrCreate', CardController.findOrCreateCard);
router.put('/status/:status', CardController.updateCardStatus);

export default router;
