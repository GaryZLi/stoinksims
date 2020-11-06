import pool from '../../../database/database';

const portfolioHandler = (req, res) => {

    const { uid } = req.body;

    pool
        .query(
            `
            select shares, symbol, worth
            from portfolio
            where uid=$1
            `,
            [uid]
        )
        .then(results => res.status(200).send(results.rows))
        .catch(err => res.status(500).send(err));
};

export default portfolioHandler;