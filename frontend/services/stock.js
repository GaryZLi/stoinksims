import axios from 'axios';
import path from './path';

const stockPath = path + 'stock/';

export const getStockInfo = ticker => (
    axios
        .get(stockPath+ticker)
        .then(results => results.data)
        .catch(err => {
            throw err
        })
);