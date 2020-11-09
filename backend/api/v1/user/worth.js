import { getPrice } from '../../../utils/iex';

const worthHandler = (req, res) => {
    const {stocks} = req.body;

    Promise.all(stocks.map(stock => getPrice(stock)))
    .then(result => {
        const prices = {};

        result.forEach((price, id) => prices[stocks[id]] = price);

        res
            .status(200)
            .send(prices);
    })
    .catch(() => res.status(500).end());
};

export default worthHandler;