// import { getIp } from '../../../../utils/ip';
// import { signIn } from '../../../../utils/firebase';
// import {
//     updateWhitelist,
// } from '../../../../utils/whitelist';

const {
    updateWhitelist,
} = require('../../../../utils/whitelist');
const {
    getIp,
} = require('../../../../utils/ip');
const {
    signIn,
} = require('../../../../utils/firebase');

const signInHandler = async (req, res) => {
    const { email, password } = req.body;

    const uid = await signIn(email, password)
        .then(uid => uid)
        .catch(err => res.status(500).end());

    updateWhitelist(getIp(req), uid);
    res.status(200).send({ uid });
};

module.exports = signInHandler;