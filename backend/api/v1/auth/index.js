import { Router } from 'express';
import isLoggedInHandler from './isLoggedIn';
import signInHandler from './signIn';
import signUpHandler from './signUp';
import forgotPasswordHandler from './forgotPassword';

const router = new Router();

router.get('/', isLoggedInHandler);

router.post('/signin', signInHandler);

router.post('/signup', signUpHandler);

router.post('/forgotpassword', forgotPasswordHandler);

export default router;
