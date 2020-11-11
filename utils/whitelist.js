const pool = require('../database/database');

const whitelist = {};

const isWhitelisted = async ip => {
console.log('neha')
    if (whitelist[ip]) return whitelist[ip];
console.log('heahh--')
    const uid = await pool
        .query(
            `
            select uid
            from logs
            where ip=$1
            `,
            [ip]
        )
        .then(result => result.rows[0]?.uid)
        .catch(err => {
            throw err;
        })

    if (uid) {
        whitelist[ip] = uid;
    }   


    return uid;
};

const updateWhitelist = (ip, uid) => {
    whitelist[ip] = uid;

    pool
        .query(
            `
            insert into logs(uid, ip)
            values($1, $2)
            `,
            [uid, ip]
        )
        .then()
        .catch(err => {
            throw err;
        });
};

module.exports = {
    isWhitelisted,
    updateWhitelist,
};