import Booking from '../models/Booking.js';
import { validatePhoneNumber } from '../utils/validate.util.js';

export const createBooking = async (req, res) => {
    const newBooking = new Booking(req.body);
    try {
        if (validatePhoneNumber(req.body.phone)) {
            await newBooking.save();
            res.status(201).json({
                success: true,
                message: "Your tour is booked"
            })
        } else {
            res.status(403).json({
                success: false,
                message: "Invalid phone number"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Book failed"
        })
    }
}

export const getBookingById = async (req, res) => {
    const bookingId = req.params.bookingId;
    try {
        const booking = await Booking.findById(bookingId);

        res.status(200).json({
            success: true,
            message: "Successful",
            data: booking
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Not found"
        })
    }
}

export const getAllBooking = async (req, res) => {
    try {
        const bookings = await Booking.find({})

        res.status(200).json({
            success: true,
            message: "Successful",
            data: bookings
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to book"
        })
    }
}