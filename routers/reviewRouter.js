import express from 'express';
import { createReview } from '../controllers/reviewController.js';

const reviewRouter = express.Router();

// Route create review by tourID
reviewRouter.post("/createReview/:tourId", createReview);

export default reviewRouter;