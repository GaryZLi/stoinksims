// import pool from '../../../../database/database';

const withMiddleware = require('../../../../../utils/middleware');
const pool = require('../../../../../database/database');

const watchListHandler = async (req, res) => {
    const {
        uid,
        stock,
    } = req.body;

    const watchedStock = await pool
        .query(
            `
                select symbol
                from watchlist
                where uid=$1 and symbol=$2
            `,
            [uid, stock]
        )
        .then(res => res.rows)
        .catch(() => res.status(500).end());

    if (watchedStock.length === 0) {
        pool
            .query(
                `
                insert into watchlist(uid, symbol)
                values($1, $2)
                `
                ,
                [uid, stock]
            )
            .then(() => res.status(200).send())
            .catch(() => res.status(500).end());
    }
    else {
        res.status(200).end();
    }
};

module.exports = withMiddleware(watchListHandler);