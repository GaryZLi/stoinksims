import firebase from 'firebase';
import {
    isWhitelisted,
    updateWhitelist,
} from '../../../../backend/utils/whitelist';

const forgotpassword = (req, res) => {
    const { email } = req.body;

};

export default forgotpassword;