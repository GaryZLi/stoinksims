import pool from '../../../database/database';
import { getPrice } from '../../../utils/iex';

const askHandler = async (req, res) => {
    const {
        uid,
        symbol,
    } = req.body;

    const shares = parseInt(req.body.shares);

    const data = await pool
        .query(
            `
            select shares
            from portfolio
            where uid=$1 and symbol=$2
            `,
            [uid, symbol]
        )
        .then(result => result.rows[0])
        .catch(err => {
            console.log('45', err);
            res.status(500).end()
        });

    if (data.shares < shares) {
        return res
            .status(400)
            .send("You don't have enough shares!");
    }

    const buyingPower = parseInt(await pool
        .query(
            `
            select buyingPower
            from users
            where uid=$1
            `,
            [uid]
        )
        .then(result => result.rows[0].buyingpower)
        .catch(err => res.status(500).end()));


    const price = parseInt(await getPrice(symbol)
        .then(result => result)
        .catch(err => res.status(500).end()));


    const newBuyingPower = buyingPower + (shares * price);
    const newShares = parseFloat(data.shares) - shares;

    await pool
        .query(
            `
                update portfolio
                set shares=$3
                where uid=$1 and symbol=$2
            `,
            [uid, symbol, newShares]
        )
        .then()
        .catch(err => res.status(500).end());

    await pool
        .query(
            `
                update users
                set buyingPower=$2
                where uid=$1
            `,
            [uid, newBuyingPower]
        )
        .then()
        .catch(err => res.status(500).end());

    pool
        .query(
            `
                insert into transactions(uid, date, symbol, price, shares, action)
                values ($1, $2, $3, $4, $5, $6)
            `,
            [uid, new Date(), symbol, price, shares, 'sell']
        )
        .then()
        .catch(err => console.log(err));

    res
        .status(200)
        .send({
            msg: `Executed at $${price} per share.`,
            buyingPower: newBuyingPower,
            shares: newShares,
        });
};

export default askHandler;