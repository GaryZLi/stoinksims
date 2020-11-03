import axios from 'axios';
import { IEXCloudClient } from "node-iex-cloud";

const iex = new IEXCloudClient(axios, {
    sandbox: true,
    publishable: "Tpk_f165ed64a5dd4b52a01efa90dde1e08a",
    version: "stable"
});


// iex
//     .symbol("googl")
//     .financials("quarterly")
//     .then(res => console.log(res));

const stocks = iex.batchSymbols(['appl', 'amzn', 'nflx']);

const arr = [];

arr.push()

// iex
//     .symbol("googl")
//     .ceoCompensation()
//     .then(res => console.log(res));


//     iex
//   .symbol("aapl")
//   .cashFlow("annual", 3)
//   .then(res => console.log(res));


//   iex
//   .symbol("aapl")
//   .chart("6m", { chartCloseOnly: true, chartSimplify: true, chartInterval: 2 })
//   .then(res => console.log(res));