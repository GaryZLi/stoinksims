import { Router } from 'express';
import tickerHandler from './ticker';

const router = new Router();

router.get('/:ticker', tickerHandler);

export default router;