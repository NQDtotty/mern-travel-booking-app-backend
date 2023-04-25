import express from "express";
import { createTour, getTourById, getAllTour, updateTour, deleteTour, getTourBySearch, getFeaturedTour, getTourCount } from '../controllers/tourController.js';
import { verifyAdmin } from "../utils/verifyToken.js";

const tourRouter = express.Router();

// Create tour, just admin can access this router
tourRouter.post("/createTour", verifyAdmin, createTour);

// Get tour by ID
tourRouter.get("/getTourById/:id", getTourById);

// Get all tours
tourRouter.get("/getAllTour", getAllTour);

// Update tour by ID, just admin can access this router
tourRouter.put("/updateTour/:id", verifyAdmin, updateTour);

// Delete tour by ID, just admin can access this router
tourRouter.delete("/deleteTour/:id", verifyAdmin, deleteTour);

// Search tour by city, distance, maxGroupSize
tourRouter.get("/search/getTourBySearch", getTourBySearch);

// Get featured tours
tourRouter.get("/search/getFeaturedTour", getFeaturedTour);

// Total of all tours
tourRouter.get("/search/getTourCount", getTourCount);

export default tourRouter;