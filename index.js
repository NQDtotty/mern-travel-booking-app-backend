import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import tourRouter from './routers/tourRouter.js';
import userRouter from './routers/userRouter.js';
import authRouter from './routers/authRouter.js';
import reviewRouter from './routers/reviewRouter.js';
import bookingRouter from './routers/bookingRouter.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
    origin: true,
    credentials: true
}

// database connection
// mongoose.set("strictQuery", false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("MongoDB database connected");
    } catch (error) {
        console.log("MongoDB database connect failed");
    }
}

// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/api/tour", tourRouter);
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/review", reviewRouter);
app.use("/api/booking", bookingRouter);

app.listen(port, () => {
    connect();
    console.log("Server listening on port ", port);
})
