import Booking from '../models/Booking.js';

// Create new booking
export const createBooking = async (req, res) => {
    const newBooking = new Booking(req.body);
    try {
        const savedBooking = await newBooking.save();

        res.status(200).json({
            success: true,
            message: "Your tour is booked",
            data: savedBooking
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Book failed"
        })
    }
}

// Get booking by ID
export const getBookingById = async (req, res) => {
    const id = req.params.id;
    try {
        const booking = await Booking.findById(id);

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

// Get all booking
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
            message: "Internal server error"
        })
    }
}