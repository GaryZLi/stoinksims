// import pool from '../../../../database/database';
// import { updateWhitelist } from '../../../../utils/whitelist';
// import { getIp } from '../../../../utils/ip';
// import { signUp } from '../../../../utils/firebase';

const {
    updateWhitelist,
} = require('../../../../utils/whitelist');
const {
    getIp,
} = require('../../../../utils/ip');
const {
    signUp,
} = require('../../../../utils/firebase');
const pool = require('../../../../database/database');

const signUpHandler = async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        password,
    } = req.body;

    const uid = await signUp(email, password)
        .then(uid => uid)
        .catch(err => res.status(500).send(err));

    await pool.query(
        `
            INSERT INTO Users(uid, firstName, lastName, buyingPower)
            VALUES ($1, $2, $3, $4)
        `,
        [uid, firstName, lastName, 10000]
    )
        .then()
        .catch(err => res.status(500).send(err));

    updateWhitelist(getIp(req), uid);
    res
        .status(200)
        .send({
            uid: uid
        });

};

module.exports = signUpHandler;