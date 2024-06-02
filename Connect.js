const mongoose = require('mongoose');

const connectToMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/leads_Data", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = connectToMongoDB;
