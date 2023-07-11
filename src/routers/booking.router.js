import express from 'express';
import { createBooking, getBookingById, getAllBooking } from '../controllers/booking.controller.js';
import { verifyAdmin } from '../middlewares/verifyToken.middleware.js';

const bookingRouter = express.Router();

bookingRouter.post("/", createBooking);

bookingRouter.get("/:bookingId", getBookingById);

bookingRouter.get("/", verifyAdmin, getAllBooking);

export default bookingRouter;