// import { Router } from 'express';
// import authRoute from './auth';
// import userRoute from './user';
// import stockRoute from './stock';
// import { isWhitelisted } from '../../../backend/utils/whitelist';
// import { getIp } from '../../../backend/utils/ip';

// const withMiddleware = require('../../../utils/middleware');

// const router = new Router();

// router.use('/auth', authRoute);

// router.use((req, res, next) => {
//     if (isWhitelisted(getIp(req)) !== undefined) {
//         next();
//     }
//     else {
//         res.status(401).end();
//     }
// })

// router.use('/user', userRoute);
// router.use('/stock', stockRoute);

// export default router;

// function handler (req, res) {
//     console.log(req.method)
//     res.send('3dd33')
// }

// export default withMiddleware(handler);