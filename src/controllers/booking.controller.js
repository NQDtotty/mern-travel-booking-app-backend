import Booking from '../models/Booking.js';

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
            message: "Internal server error"
        })
    }
}