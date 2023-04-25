import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Register
export const register = async (req, res) => {
    try {
        // Hashing password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })
        const savedUser = await newUser.save();
        res.status(200).json({
            success: true,
            message: "Register successfully",
            data: savedUser
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Fail to register!"
        })
    }
}

// Login
export const login = async (req, res) => {
    const email = req.body.email;
    try {
        const user = await User.findOne({ email });

        // If user doesn't exist
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        const checkCorrectPass = await bcrypt.compare(req.body.password, user.password);
        // Check if password wrong
        if (!checkCorrectPass) {
            return res.status(401).json({
                success: false,
                message: "Incorrect email or password"
            })
        }

        const { password, role, ...rest } = user._doc;

        // Create jwt token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "15d" }
        )

        // Set token in the browser cookies and send the response to the client
        res.cookie('accessToken',
            token, {
            httpOnly: true,
            expires: token.expiresIn
        }).status(200).json({
            success: true,
            message: "Successfully login",
            token,
            data: { ...rest },
            role
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Fail to login"
        })
    }
}