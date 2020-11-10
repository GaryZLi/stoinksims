const {
    isWhitelisted,
    updateWhitelist,
} = require('../utils/whitelist');
const {
    getIp,
} = require('../utils/ip');

const withMiddleware = handler => {
    return async (req, res) => {
        if (isWhitelisted(getIp(req)) === undefined) {
            return res.status(401).end();
        }

        return handler(req, res);
    }
};


module.exports = withMiddleware;