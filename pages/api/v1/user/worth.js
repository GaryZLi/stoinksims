const {
    getPrice
} = require('../../../../utils/iex');
const withMiddleware = require('../../../../utils/middleware');

const worthHandler = async (req, res) => {
    const { stocks } = req.body;

    const result = await Promise.all(stocks.map(stock => getPrice(stock)))
        .then(result => result)
        .catch(() => res.status(500).end());

    const prices = {};

    result.forEach((price, id) => prices[stocks[id]] = price);

    res
        .status(200)
        .send(prices);
};

module.exports = withMiddleware(worthHandler);