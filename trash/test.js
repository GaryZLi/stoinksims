import 'dotenv/config';
import axios from 'axios';
const { IEXCloudClient } = require("node-iex-cloud");

const iex = new IEXCloudClient(axios, {
    publishable: process.env.IEX_PUBLISHABLE_KEY,
    version: "stable"
});

iex.symbol('amzn')
.intradayPrices()
.then(res => {
    for (const a of res) {
        console.log(a)
    }
}).catch(err => err)