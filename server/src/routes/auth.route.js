import { Router } from 'express';
import { auth } from '#middlewares/auth.middleware.js';
import AuthController from '#controllers/auth.controller.js';

const router = Router();

router
    .post('/register', AuthController.register)
    .post('/login', AuthController.login)
    .get('/me', auth, AuthController.me);

export default router;