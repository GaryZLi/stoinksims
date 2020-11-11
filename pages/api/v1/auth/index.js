// import { Router } from 'express';
// import isLoggedInHandler from './isLoggedIn';
// import signInHandler from './signIn';
// import signUpHandler from './signUp';
// import forgotPasswordHandler from './forgotPassword';

// const router = new Router();

// router.get('/', isLoggedInHandler);

// router.post('/signin', signInHandler);

// router.post('/signup', signUpHandler);

// router.post('/forgotpassword', forgotPasswordHandler);

// export default router;


// import { 
//     isWhitelisted,
// } from '../../../../utils/whitelist';
// import { getIp } from '../../../../utils/ip';

const {
    isWhitelisted,
} = require('../../../../utils/whitelist');
const {
    getIp,
} = require('../../../../utils/ip');

const isLoggedInHandler = async (req, res) => {
    const uid = await isWhitelisted(getIp(req))
        .then(result => result)
        .catch(err => {
            res.status(500).end();
        });

    res.status(200).send({ uid });
};

export default isLoggedInHandler;