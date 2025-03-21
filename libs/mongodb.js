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


// // const mongodb_url='mongodb+srv://darshil2015:e96nvb9g8ematamv@cluster0.yi5y6i5.mongodb.net/himanshu'
// import mongoose from "mongoose";


// const mongodb_url =
//   "mongodb+srv://darshil2015:e96nvb9g8ematamv@cluster0.yi5y6i5.mongodb.net/himanshu";

// if (!mongodb_url) {
//   throw new Error(
//     "Please define the MONGODB_URI environment variable inside .env.local"
//   );
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { con: null, promise: null };
// }

// const connectMongoDB = async () => {
//   if (cached.conn) {
//     console.log("✅ Connected to MongoDB");
//     return cached.conn;
//   }

//   // If a connection does not exist, we check if a promise is already in progress. If a promise is already in progress, we wait for it to resolve to get the connection
//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };

//     cached.promise = await mongoose.connect(mongodb_url, opts).then((mongoose) => {
//       return mongoose;
//     });
//   }

//   try {
//     cached.conn = await cached.promise;
//   } catch (e) {
//     cached.promise = null;
//     throw e;
//   }

//   return cached.conn;
// };

// export default connectMongoDB;
