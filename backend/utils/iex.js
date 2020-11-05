import axios from 'axios';
import { IEXCloudClient } from "node-iex-cloud";

export const iex = new IEXCloudClient(axios, {
    sandbox: true,
    publishable: process.env.IEX_PUBLISHABLE_KEY,
    version: "stable"
});

export const getTickerInfo = async ticker => {
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

    const news = await iex
        .symbol(ticker)
        .news()
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
        news,
    };
};