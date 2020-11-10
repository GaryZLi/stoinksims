const withMiddleware = require('../../../../utils/middleware');
const pool = require('../../../../database/database');

const infoHandler = (req, res) => {

    const { uid } = req.body;

    pool
        .query(
            `
            select *
            from users
            where uid=$1
            `,
            [uid]
        )
        .then(results => res.status(200).send(results.rows[0]))
        .catch(err => res.status(500).send(err));
};

module.exports = withMiddleware(infoHandler);