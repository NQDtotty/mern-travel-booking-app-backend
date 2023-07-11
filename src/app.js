import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
// import swaggerJSDoc from 'swagger-jsdoc';
// import swaggerUi from 'swagger-ui-express';
// import { optionsSwagger } from './config/swaggerConfig.js';

import tourRouter from './routers/tour.router.js';
import userRouter from './routers/user.router.js';
import authRouter from './routers/auth.router.js';
import reviewRouter from './routers/review.router.js';
import bookingRouter from './routers/booking.router.js';

dotenv.config();
const corsOptions = {
    origin: true,
    credentials: true
}

const app = express();

// const swaggerSpec = swaggerJSDoc(optionsSwagger);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true })
// );
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/tours", tourRouter);
app.use("/users", userRouter);
app.use("/auths", authRouter);
app.use("/reviews", reviewRouter);
app.use("/bookings", bookingRouter);

export default app;