import { Router } from 'express';
import tickerHandler from './ticker';
import bidHandler from './bid';

const router = new Router();

router.get('/:ticker', tickerHandler);

router.post('/bid', bidHandler);

export default router;