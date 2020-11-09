import axios from 'axios';
import path from './path';

const stockPath = path + 'stock/';

export const getStockInfo = ticker => (
    axios
        .get(stockPath + ticker)
        .then(results => results.data)
        .catch(err => {
            throw err
        })
);

export const buyShares = (uid, symbol, shares) => (
    axios
        .post(stockPath + 'bid', {
            uid,
            symbol,
            shares,
        })
        .then(results => results.data)
        .catch(err => {
            throw err;
        })
);

export const askShares = (uid, symbol, shares) => (
    axios
        .post(stockPath + 'ask', {
            uid,
            symbol,
            shares,
        })
        .then(results => results.data)
        .catch(err => {
            throw err;
        })
);