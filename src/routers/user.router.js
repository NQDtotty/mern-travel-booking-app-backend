import express from 'express';
import { createUser, getUserById, getAllUser, updateUser, deleteUser } from '../controllers/user.controller.js';
import { verifyAdmin, verifyUser } from '../middlewares/verifyToken.middleware.js';

const userRouter = express.Router();

userRouter.get("/", verifyAdmin, getAllUser);

userRouter.post("/", verifyAdmin, createUser);

userRouter.get("/:userId", verifyUser, getUserById);

userRouter.put("/:userId", verifyUser, updateUser);

userRouter.delete("/:userId", verifyUser, deleteUser);

export default userRouter;