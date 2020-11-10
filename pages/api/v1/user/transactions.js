const withMiddleware = require('../../../../utils/middleware');
const pool = require('../../../../database/database');

const transactionsHandler = async (req, res) => {
    const { uid } = req.body;

    const results = await pool
        .query(
            `
            select *
            from transactions
            where uid=$1
            `,
            [uid]
        )
        .then(results => results)
        .catch(err => res.status(500).send(err));

    res.status(200).send(results.rows);
};

module.exports = withMiddleware(transactionsHandler);