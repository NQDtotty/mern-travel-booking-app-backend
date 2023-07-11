import express from 'express';
import { createReview } from '../controllers/review.controller.js';

const reviewRouter = express.Router();

reviewRouter.post("/:tourId", createReview);

export default reviewRouter;