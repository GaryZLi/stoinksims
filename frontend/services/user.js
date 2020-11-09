import axios from 'axios';
import path from './path';

const userPath = path + 'user/';

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

export const getUserPortfolio = uid => (
    axios
        .post(userPath + 'portfolio', {
            uid
        })
        .then(results => results.data)
        .catch(err => {
            throw err;
        })
);

export const getUserTransactions = uid => (
    axios
        .post(userPath + 'transactions', {
            uid
        })
        .then(results => results.data)
        .catch(err => {
            throw err;
        })
);

export const getUserWorth = stocks => (
    axios
        .post(userPath + 'worth', {
            stocks,
        })
        .then(results => results.data)
        .catch(err => {
            throw err;
        })
);