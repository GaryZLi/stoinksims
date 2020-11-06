import pool from '../../../database/database';
import { getPrice } from '../../../utils/iex';

const bidHandler = async (req, res) => {
    const {
        uid,
        symbol,
    } = req.body;

    const shares = parseInt(req.body.shares);

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
        .catch(err => {
            console.log(err, '23');
            res.status(500).end()
        }));


    const price = parseInt(await getPrice(symbol)
        .then(result => result)
        .catch(err => {
            console.log(err, '32');
            res.status(500).end()
        }));

    const total = price * shares;

    if (total > buyingPower) {
        return res
            .status(400)
            .send('Not enough buying power!');
    }

    const data = await pool
        .query(
            `
            select shares, worth
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

    const leftOver = buyingPower - total;
    let newShares;

    if (data === undefined) {
        newShares = shares;

        await pool
            .query(
                `
                insert into portfolio(uid, symbol, shares, worth)
                values ($1, $2, $3, $4)
                `,
                [uid, symbol, shares, total]
            )
            .then()
            .catch(err => {
                console.log(err, 'ddd');
                res.status(500).end()
            });
    }
    else {
        newShares = parseFloat(data.shares) + shares;

        await pool
            .query(
                `
                update portfolio
                set shares=$3, worth=$4
                where uid=$1 and symbol=$2
                `,
                [uid, symbol, newShares, parseFloat(data.worth) + total]
            )
            .then()
            .catch(err => {
                console.log(err);
                res.status(500).end()
            });
    }

    await pool
        .query(
            `
                update users
                set buyingPower=$2
                where uid=$1
                `,
            [uid, leftOver]
        )
        .then()
        .catch(err => {
            console.log(err);
            res.status(500).end()
        });

    res
        .status(200)
        .send({
            msg: `Executed at $${price} per share.`,
            buyingPower: leftOver,
            shares: newShares,
        });
};

export default bidHandler;