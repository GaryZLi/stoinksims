import { Router } from 'express';
import infoHandler from './info';
import portfolioHandler from './portfolio';
import transactionsHandler from './transactions';
import worthHandler from './worth';
import {
    getWatchListHandler,
    addWatchListHandler,
} from './watchlist';

const router = new Router();

router.post('/', infoHandler);

router.post('/portfolio', portfolioHandler);

router.post('/transactions', transactionsHandler);

router.post('/worth', worthHandler);

router.get('/watchlist/:uid', getWatchListHandler);
router.post('/watchlist', addWatchListHandler);

export default router;
