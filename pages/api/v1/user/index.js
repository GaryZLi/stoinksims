// import { Router } from 'express';
// import infoHandler from './info';
// import portfolioHandler from './portfolio';
// import transactionsHandler from './transactions';
// import worthHandler from './worth';
// import {
//     getWatchListHandler,
//     addWatchListHandler,
// } from './watchlist';

// const router = new Router();

// router.post('/', infoHandler);

// router.post('/portfolio', portfolioHandler);

// router.post('/transactions', transactionsHandler);

// router.post('/worth', worthHandler);

// router.get('/watchlist/:uid', getWatchListHandler);
// router.post('/watchlist', addWatchListHandler);

// export default router;


// const infoHandler = require('./info');

// const userHandler = (req, res) => {
//     if (req.method === 'POST') {
//         infoHandler(req, res);
//     }
// };

const withMiddleware = require('../../../../utils/middleware');
const pool = require('../../../../database/database');

const infoHandler = async (req, res) => {
    const { uid } = req.body;

    const results = await pool
        .query(
            `
            select *
            from users
            where uid=$1
            `,
            [uid]
        )
        .then(results => results)
        .catch(err => res.status(500).send(err));

    res.status(200).send(results.rows[0])
};

module.exports = withMiddleware(infoHandler);