const mongoose = require('mongoose');



// const connectDb = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Database connection successful!");
//   } catch (error) {
//     console.error("Database connection failed:", error);
//     process.exit(1); // Exit process with failure
//   }
// };

// module.exports = connectDb;





const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
  }catch(error) {
    console.log(error);
  }
};
module.exports = connectDb;