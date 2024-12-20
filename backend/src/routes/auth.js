import express from 'express';
const router = express.Router();

import auth from '../controllers/auth';

router.post('/register', auth.Register);
router.post('/login', auth.Login);

export default router;