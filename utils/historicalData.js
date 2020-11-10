const axios = require('axios');
const { parse } = require('node-html-parser');

const requestHistoricalData = ticker => (
    axios
        .get(`https://finance.yahoo.com/quote/${ticker}/history?p=${ticker}`)
        .then(result => parseHistoricalData(result.data))
        .catch(err => {
            throw err;
        })
);

const parseHistoricalData = html => {
    const table = Array.from(requireparse(html).querySelector('tbody').childNodes)
    const result = [];

    for (let i = 0; i < 65; i++) {
        const cols = table[i].childNodes;

        const dayData = {};
        const keys = ['date', 'open', 'high', 'low', 'close', 'adjClose', 'volume'];
        for (let j = 0; j < cols.length; j++) {
            dayData[keys[j]] = cols[j].rawText;
        }

        result.push(dayData);
    }

    return result;
};

module.exports = {
    requestHistoricalData,
    parseHistoricalData,
};