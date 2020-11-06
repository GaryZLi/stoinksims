import pool from '../../../database/database';
import { updateWhitelist } from '../../../utils/whitelist';
import { getIp } from '../../../utils/ip';
import { signUp } from '../../../utils/firebase';

const signUpHandler = (req, res) => {
    const {
        firstName,
        lastName,
        email,
        password,
    } = req.body;

        signUp(email, password)
        .then(uid => {
            pool.query(
                `
                INSERT INTO Users(uid, firstName, lastName, buyingPower)
                VALUES ($1, $2, $3, $4)
                `,
                [uid, firstName, lastName, 10000]
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

export default signUpHandler;