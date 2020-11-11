const {
    isWhitelisted,
    // updateWhitelist,
} = require('../utils/whitelist');
const {
    getIp,
} = require('../utils/ip');

const withMiddleware = handler => {
    return async (req, res) => {
        const uid = await isWhitelisted(getIp(req))
        .then(result => result)
        .catch(() => res.status(500).end());

        if (uid === undefined) {
            return res.status(401).end();
        }

        return handler(req, res);
    }
};


module.exports = withMiddleware;