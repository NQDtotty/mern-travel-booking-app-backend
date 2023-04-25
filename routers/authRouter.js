import express from 'express';
import { register, login } from '../controllers/authController.js';

const authRouter = express.Router();

// Login router
authRouter.post("/login", login);

// Register router
authRouter.post("/register", register);

export default authRouter;