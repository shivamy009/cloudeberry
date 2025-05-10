import express from 'express';

import authMiddleware from '../middleware/auth.js';
import { getProfile, login, register } from '../controllers/authController.js';

const router = express.Router();

// Auth routes
router.post('/register',register );
router.post('/login',login);
router.get('/profile', authMiddleware,getProfile);

export default router;