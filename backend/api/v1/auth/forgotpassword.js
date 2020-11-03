import firebase from 'firebase';
import {
    isWhitelisted,
    updateWhitelist,
} from '../../../utils/whitelist';

const forgotpassword = (req, res) => {
    const { email } = req.body;

};

export default forgotpassword;