import axios from 'axios';
import path from './path';

const userPath = path + 'user';

export const getUserInfo = uid => (
    axios
        .post(`${userPath}`, {
            uid
        })
        .then(results => results.data)
        .catch(err => {
            throw err;
        })
);