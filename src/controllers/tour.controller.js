import Tour from '../models/Tour.js';

export const createTour = async (req, res) => {
    const newTour = new Tour(req.body);
    try {
        const savedTour = await newTour.save();
        res
            .status(200)
            .json({
                success: true,
                message: "Successfully created",
                data: savedTour,
            })
    } catch (error) {
        res
            .status(500)
            .json({
                success: false,
                message: "Fail to create. Try again"
            })
    }
}

export const getTourById = async (req, res) => {
    const tourId = req.params.tourId;
    try {
        const tour = await Tour.findById(tourId).populate("reviews");
        res.status(200).json({
            success: true,
            message: "Successful",
            data: tour
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Not found",
        })
    }
}

export const getAllTour = async (req, res) => {
    // For pagination
    const page = parseInt(req.query.page);

    try {
        const tours = await Tour.find({}).skip(page * 4).limit(4).populate("reviews");
        res.status(200).json({
            success: true,
            count: tours.length,
            message: "Successful",
            data: tours
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Not found"
        })
    }
}

export const updateTour = async (req, res) => {
    const tourId = req.params.tourId;
    try {
        const updatedTour = await Tour.findByIdAndUpdate(
            tourId,
            {
                $set: req.body
            },
            {
                new: true
            })

        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updatedTour
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Fail to update. Try again",
        })
    }
}

export const deleteTour = async (req, res) => {
    const tourId = req.params.tourId;
    try {
        await Tour.findByIdAndRemove(tourId)
        res.status(200).json({
            success: true,
            message: "Successfully deleted"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Fail to delete. Try again",
        })
    }
}

export const getTourBySearch = async (req, res) => {
    const city = new RegExp(req.query.city, 'i');
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);

    try {
        const tours = await Tour.find({ city, distance: { $gte: distance }, maxGroupSize: { $gte: maxGroupSize } }).populate("reviews");
        res.status(200).json({
            success: true,
            message: "Successful",
            data: tours
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Not found"
        })
    }
}

export const getFeaturedTour = async (req, res) => {
    try {
        const tours = await Tour.find({ featured: true }).populate("reviews").limit(8);
        res.status(200).json({
            success: true,
            count: tours.length,
            message: "Successful",
            data: tours
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Not found"
        })
    }
}

export const getTourCount = async (req, res) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount();

        res.status(200).json({
            success: true,
            data: tourCount
        })
    } catch (error) {
        res.status(505).json({
            success: false,
            message: "Fail to fetch"
        })
    }
}
