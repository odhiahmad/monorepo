import express from 'express';
import { updateUser, fetchUser } from '../controller/userController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.put('/update-user-data', authMiddleware, updateUser);
router.get('/fetch-user-data', authMiddleware, fetchUser);

export default router;