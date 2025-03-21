import mongoose from "mongoose";

const connectMongoDB = async () => {
  // try {
  //   await mongoose.connect(process.env.MONGO_URI);
  //   console.log("Connected to MongoDB.");
  // } catch (error) {
  //   console.log(error);
  // }
  try {
    await mongoose.connect('mongodb+srv://harshiljoshi2102:harshil2102@cluster0.t4pzw.mongodb.net/');
    // mongoose.connect(process.env.MONGO_URI);
    const connection = mongoose.connection;
    connection.on('connected', () => {
        console.log('MongoDB connected successfully..');
    })
    connection.on('error', (err) => {
        console.log(`MongoDB connection error: ${err}`);
        process.exit();
    })
} catch (error) {
    console.log('Something went wrong');
    console.log(error);
}
};

export default connectMongoDB;
