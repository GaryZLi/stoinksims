const axios = require('axios');
const { IEXCloudClient } = require("node-iex-cloud");

const iex = new IEXCloudClient(axios, {
    sandbox: false,
    publishable: process.env.IEX_PUBLISHABLE_KEY,
    version: "stable"
});

// process.env.NODE_ENV === 'development'

const getTickerInfo = async ticker => {
    const companyInfo = await iex
        .symbol(ticker)
        .company()
        .then(result => result)
        .catch(err => {
            throw err;
        });

    const quoteInfo = await iex
        .symbol(ticker)
        .quote()
        .then(result => result)
        .catch(err => {
            throw err;
        });

    const stats = await iex
        .symbol(ticker)
        .stats()
        .then(result => result)
        .catch(err => {
            throw err;
        });

    return {
        ...companyInfo,
        ...quoteInfo,
        ...stats,
    };
};

const getPrice = ticker => (
    iex.
        symbol(ticker)
        .intradayPrices()
        .then(result => result[result.length - 1].close)
        .catch(err => {
            throw err;
        })
);

module.exports = {
    getTickerInfo,
    getPrice,
};