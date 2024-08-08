// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URI);
//         console.log(`MongoDB Connected: ${conn.connection.host}`);
        
//     } catch (error) {
//         console.log(`Error: ${error.message}`);
//         process.exit(1);
//     }
// };

// export default connectDB;

import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds instead of the default 30 seconds
            socketTimeoutMS: 45000,        // Close sockets after 45 seconds of inactivity
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }

    // Log when the connection is disconnected
    mongoose.connection.on('disconnected', () => {
        console.log('MongoDB connection disconnected');
    });

    // Log any errors after initial connection
    mongoose.connection.on('error', (err) => {
        console.error(`MongoDB connection error: ${err}`);
    });
};

export default connectDB;
