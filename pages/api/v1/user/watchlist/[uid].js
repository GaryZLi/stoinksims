const pool = require('../../../../../database/database');
const withMiddleware = require('../../../../../utils/middleware');

const getWatchListHandler = async (req, res) => {
    const { uid } = req.query;

    const result = await pool
        .query(
            `
            select symbol
            from watchlist
            where uid=$1
            `,
            [uid]
        )
        .then(result => result)
        .catch(() => res.status(500).end());

    res.status(200).send(result.rows);
};

module.exports = withMiddleware(getWatchListHandler);