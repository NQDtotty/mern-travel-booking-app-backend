import User from '../models/User.js';

// Create new user
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

// Get one user by ID
export const getUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
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

// Get all user
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

// Update user by ID
export const updateUser = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
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

// Delete a user by ID
export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        await User.findByIdAndRemove(id)
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