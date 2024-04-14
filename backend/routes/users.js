import { Router } from 'express';
import userController from '../controller/userController.js';

const router = Router();

router.post('/checkout', userController.PostOrder);
router.post('/make-order', userController.PostCart);
router.post('/register', userController.PostRegister);
router.get('/logout', userController.GetLogout);
router.post('/login', userController.PostLogin);

export default router;
