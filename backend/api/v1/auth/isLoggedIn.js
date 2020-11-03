import { 
    isWhitelisted,
} from '../../../utils/whitelist';
import { getIp } from '../../../utils/ip';

const isLoggedIn = (req, res) => {
    const uid = isWhitelisted(getIp(req));

    res.status(200).send({uid: uid});
};

export default isLoggedIn;