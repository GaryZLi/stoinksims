import pool from '../../../database/database';

const transactionsHandler = (req, res) => {
    const { uid } = req.body;

    pool
        .query(
            `
            select *
            from transactions
            where uid=$1
            `,
            [uid]
        )
        .then(results => res.status(200).send(results.rows))
        .catch(err => res.status(500).send(err));
};

export default transactionsHandler;