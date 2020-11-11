// import { requestHistoricalData } from "../../../../utils/historicalData";
// import { getTickerInfo } from '../../../../utils/iex';

const {
    requestHistoricalData,
} = require('../../../../utils/historicalData');
const {
    getTickerInfo
} = require('../../../../utils/iex');
const withMiddleware = require('../../../../utils/middleware');

const tickerHandler = async (req, res) => {
    const { ticker } = req.query;

    const chartData = await requestHistoricalData(ticker)
        .then(result => result)
        .catch(() => undefined);

    const tickerInfo = await getTickerInfo(ticker)
        .then(result => result)
        .catch(() => undefined);
        
    if (!(chartData || tickerInfo)) return res.status(500).end();

        res
        .status(200)
        .send({
            ...tickerInfo,
            chartData,
        });
};

module.exports = withMiddleware(tickerHandler);