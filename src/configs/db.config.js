import mongoose from 'mongoose';

// database connection
// mongoose.set("strictQuery", false);
const connectDatabase = async () => {
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

export default connectDatabase;