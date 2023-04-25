import express from 'express';
import { createBooking, getBookingById, getAllBooking } from '../controllers/bookingController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const bookingRouter = express.Router();

// Route create booking
bookingRouter.post("/createBooking", createBooking);

// Route get booking by ID
bookingRouter.get("/getBookingById/:id", getBookingById);

// Route all booking
bookingRouter.get("/getAllBooking", verifyAdmin, getAllBooking);

export default bookingRouter;