import express from "express";
import { createTour, getTourById, getAllTour, updateTour, deleteTour, getTourBySearch, getFeaturedTour, getTourCount } from '../controllers/tour.controller.js';
import { verifyAdmin } from "../middlewares/verifyToken.middleware.js";

const tourRouter = express.Router();

tourRouter.post("/", verifyAdmin, createTour);

tourRouter.get("/:tourId", getTourById);

tourRouter.get("/", getAllTour);

tourRouter.put("/:tourId", verifyAdmin, updateTour);

tourRouter.delete("/:tourId", verifyAdmin, deleteTour);

tourRouter.get("/features/featured-tour", getFeaturedTour);

tourRouter.get("/count/count-tour", getTourCount);

tourRouter.get("/search/search-tour", getTourBySearch);

export default tourRouter;