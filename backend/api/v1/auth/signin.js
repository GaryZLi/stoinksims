import firebase from 'firebase';
import { getIp } from '../../../utils/ip';
import {
    updateWhitelist,
} from '../../../utils/whitelist';

const login = (req, res) => {
    const { email, password } = req.body;

    firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(results => {
            const uid = results.user.uid;
            
            updateWhitelist(getIp(req), uid);

            res
                .status(200)
                .send({ uid: uid});

        })
        .catch(err => res.status(500).send(err));
};

export default login;