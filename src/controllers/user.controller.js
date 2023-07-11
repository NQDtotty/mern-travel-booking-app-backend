import User from '../models/User.js';

export const createUser = async (req, res) => {
    const newUser = new User(req.body);
    try {
        const savedUser = await newUser.save();
        res.status(200).json({
            success: true,
            message: "Successfully created",
            data: savedUser,
        })
    } catch (error) {
        res
            .status(500)
            .json({
                success: false,
                message: "Fail to create. Try again"
            })
    }
}

export const getUserById = async (req, res) => {
    const userId = req.params.userId;
    try {
        const user = await User.findById(userId);
        res.status(200).json({
            success: true,
            message: "Successful",
            data: user
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Not found",
        })
    }
}

export const getAllUser = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({
            success: true,
            message: "Successful",
            data: users
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Not found"
        })
    }
}

export const updateUser = async (req, res) => {
    const userId = req.params.userId;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {
                $set: req.body
            },
            {
                new: true
            })

        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updatedUser
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Fail to update. Try again",
        })
    }
}

export const deleteUser = async (req, res) => {
    const userId = req.params.userId;
    try {
        await User.findByIdAndRemove(userId)
        res.status(200).json({
            success: true,
            message: "Successfully deleted"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Fail to delete. Try again",
        })
    }
}