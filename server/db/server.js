import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    // console.log(connection, connection.db.Records);
  } catch (error) {
    console.log("Connection error:", error.stack);
  }
};

connectDB();
