// import 'dotenv/config';
import axios from 'axios';
// import { parse } from 'node-html-parser';
// import { iex } from '../backend/utils/iex';

// import {
//   exec
// } from 'child_process';

// import {
//   parseHistoricalData, requestHistoricalData,
// } from '../backend/utils/historicalData';

// import { getTickerInfo } from '../backend/utils/iex';

// const a = axios.post('http://localhost:5000/api/v1/user', {
//   uid: 'VpqHAaPGDwRi54fRvJrPDITDek93'
// })
// .then(res => 'res.data[]')
//  .catch(err=>err) 

//  Promise.all([
//    a,
//    a,a,a,a,a
//  ])
//  .then(res => console.log(res))




// var set_ip_address = require('set-ip-address')

// var eth0 = {
//   interface: 'eth0',
//   ip_address: '10.0.0.1',
//   prefix: 20,
//   gateway: '10.0.0.1',
//   nameservers: ['8.8.8.8']
// }

// var eth1 = {
//   interface: 'eth1',
//   dhcp: true
// }

// set_ip_address.configure([eth0, eth1]).then(() => console.log('done writing config files')).catch(err => err)

// axios.get('https://api.myip.com').then(Res => console.log(Res, '--')).catch(err => err)

// var printTOR_IP = function () {

//   tr.request('https://api.ipify.org', function (err, res, body) {
//   if (!err && res.statusCode == 200) {
//       console.log("Your public (through Tor) IP is: " + body);
//    }
// });
// };

// tr.

// //print current ip

//  printTOR_IP();

// //renew to new ip
// tr.renewTorSession(function (err, msg) {
//      if (msg) {
//          printTOR_IP();
//       }
// });

const ticker = 'amzn';
axios
        .get(`https://finance.yahoo.com/quote/${ticker}/history?p=${ticker}`)
        .then(result => {
            console.log(result.data)
        })
        .catch(err => {
            throw err;
        })