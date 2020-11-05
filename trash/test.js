import 'dotenv/config';
import axios from 'axios';
import {parse}  from 'node-html-parser';
import { iex } from '../backend/utils/iex';

import {
  parseHistoricalData, requestHistoricalData,
} from '../backend/utils/historicalData';

import { getTickerInfo } from '../backend/utils/iex';

// // iex
// //     .symbol("googl")
// //     .financials("quarterly")
// //     .then(res => console.log(res));

// const stocks = iex.batchSymbols(['appl', 'IWM', 'nflx']);

// const arr = [];

// arr.push()

// iex
//     .symbol("googl")
//     .ceoCompensation()
//     .then(res => console.log(res));


//     iex
//   .symbol("aapl")
//   .cashFlow("annual", 3)
//   .then(res => console.log(res));


// --- KEEP ----
// .company()
// .stats()
// .news()
// .quote()

  // iex
  // .symbol("aapl")
  // .company()
  // .then(res => console.log(res))
  // .catch(err => console.log('eerr', err))
  

axios.get('http://localhost:5000/api/v1/stock/amzn')
.then(res => console.log(res))

  
  // V1C7UTDLXKFNFDTS

  // 30P7X37IUEIZ8T5C