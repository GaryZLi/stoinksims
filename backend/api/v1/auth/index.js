import { Router } from 'express';
import isLoggedIn from './isLoggedIn';
import signin from './signin';
import signup from './signup';
import forgotpassword from './forgotpassword';

const router = new Router();

router.get('/', isLoggedIn);

router.post('/signin', signin);

router.post('/signup', signup);

router.post('/forgotpassword', forgotpassword);

export default router;
