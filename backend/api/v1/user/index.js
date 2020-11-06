import { Router } from 'express';
import infoHandler from './info';
import portfolioHandler from './portfolio';

const router = new Router();

router.post('/', infoHandler);

router.post('/portfolio', portfolioHandler);

export default router;
