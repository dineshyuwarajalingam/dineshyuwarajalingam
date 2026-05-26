import { Router, Request, Response, NextFunction } from 'express';
import * as CardController from './card-controller';
import * as Clowd9CardController from './clowd9-card-controller';

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

router.get('/find', useProvider(CardController.findCard, Clowd9CardController.findCard));
router.post('/findOrCreate', useProvider(CardController.findOrCreateCard, Clowd9CardController.findOrCreateCard));
router.put('/status/:status', useProvider(CardController.updateCardStatus, Clowd9CardController.updateCardStatus));
router.post('/status/:cardId', useProvider(CardController.updateCardStatus, Clowd9CardController.updateCardStatus));

// Clowd9-only
router.get('/health', Clowd9CardController.healthCheck);

export default router;
