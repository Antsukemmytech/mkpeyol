const mongoose = require("mongoose");

// Your MongoDB connection string
const mongoURL = "mongodb+srv://antsukemmytech:3662aondona@antsukemmy.o0hwz.mongodb.net/mkpeyol";

// Connect to MongoDB
mongoose.connect(mongoURL)
  .then(() => {
    console.log("MongoDB connection successfully established");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });

// Export the mongoose instance
module.exports = mongoose;