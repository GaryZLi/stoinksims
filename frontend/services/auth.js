import axios from 'axios';
import path from './path';

const authPath = path + 'auth';

export const isLoggedIn = () => (
    axios
        .get(`${authPath}`)
        .then(results => results.data.uid)
        .catch(err => {
            throw err;
        })
);

export const signIn = (email, password) => (
    axios
        .post(`${authPath}/signin`, {
            email,
            password
        })
        .then(results => results.data.uid)
        .catch(err => {
            throw err;
        })
);

export const signUp = (firstName, lastName, email, password) => (
    axios
        .post(`${authPath}/signup`, {
            firstName,
            lastName,
            email,
            password
        })
        .then(results => results.data.uid)
        .catch(err => {
            throw err;
        })
);