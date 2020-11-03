import firebase from 'firebase';
import pool from '../../../database/database';
import { updateWhitelist } from '../../../utils/whitelist';
import { getIp } from '../../../utils/ip';

const signup = (req, res) => {
    const {
        firstName,
        lastName,
        email,
        password,
    } = req.body;

    firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(results => {
            const uid = results.user.uid;
            pool.query(
                `
                INSERT INTO Users(uid, firstName, lastName)
                VALUES ($1, $2, $3)
                `,
                [uid, firstName, lastName]
            )
                .then(() => {
                    res
                        .status(200)
                        .send({
                            uid: uid
                        });

                    updateWhitelist(getIp(req), uid);
                })
                .catch(err => res.status(500).send(err));
        })
        .catch(err => res.status(500).send(err));
};

export default signup;