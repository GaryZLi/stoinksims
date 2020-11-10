import pool from '../../../database/database';

export const addWatchListHandler = async (req, res) => {
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

export const getWatchListHandler = (req, res) => {
    const { uid } = req.params;
    
    pool
        .query(
            `
            select symbol
            from watchlist
            where uid=$1
            `,
            [uid]
        )
        .then(result => res.status(200).send(result.rows))
        .catch(() => res.status(500).end());
};
