import { Router } from 'express';
import pool from '../../../database/database';
import { getIp } from '../../../utils/ip';
import {
    isWhitelisted,
    updateWhitelist,
} from '../../../utils/whitelist';

const router = new Router();

router.post('/', (req, res) => {

    if (isWhitelisted(getIp(req))) {
        const {uid} = req.body;

        pool
        .query(
            `
            select *
            from users
            where uid=$1
            `,
            [uid]
        )
        .then(results => res.status(200).send(results.rows[0]))
        .catch(err => res.status(500).send(err));
    }
    else {
        res.status(401).send();
    }
});

export default router;
