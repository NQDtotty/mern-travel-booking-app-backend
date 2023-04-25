import express from 'express';
import { getUserById, getAllUser, updateUser, deleteUser } from '../controllers/userController.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const userRouter = express.Router();

userRouter.post("/createUser", verifyAdmin, createUser);

// Get user by ID
userRouter.get("/getUserById/:id", verifyUser, getUserById);

// Get all users
userRouter.get("/getAllUser", verifyAdmin, getAllUser);

// Update user by ID
userRouter.put("/updateUser/:id", verifyUser, updateUser);

// Delete user by ID
userRouter.delete("/deleteUser/:id", verifyUser, deleteUser);

export default userRouter;