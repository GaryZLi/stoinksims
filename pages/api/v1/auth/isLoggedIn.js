import { 
    isWhitelisted,
} from '../../../../backend/utils/whitelist';
import { getIp } from '../../../../backend/utils/ip';

const isLoggedInHandler = (req, res) => {
    const uid = isWhitelisted(getIp(req));

    res.status(200).send({ uid });
};

export default isLoggedInHandler;