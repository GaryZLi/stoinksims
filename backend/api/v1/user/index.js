import { Router } from 'express';
import infoHandler from './info';
import portfolioHandler from './portfolio';
import transactionsHandler from './transactions';
import worthHandler from './worth';

const router = new Router();

router.post('/', infoHandler);

router.post('/portfolio', portfolioHandler);

router.post('/transactions', transactionsHandler);

router.post('/worth', worthHandler);

export default router;
