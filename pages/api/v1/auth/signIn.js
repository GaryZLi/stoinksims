import { getIp } from '../../../../backend/utils/ip';
import { signIn } from '../../../../backend/utils/firebase';
import {
    updateWhitelist,
} from '../../../../backend/utils/whitelist';


const signInHandler = (req, res) => {
    const {email, password} = req.body;

    signIn(email, password)
        .then(uid => {
            updateWhitelist(getIp(req), uid);
            res.status(200).send({uid});
        })
        .catch(err => res.status(500).end());
};

export default signInHandler;