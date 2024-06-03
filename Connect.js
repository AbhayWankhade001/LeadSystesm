const mongoose = require('mongoose');

const connectToMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://abhaywankhade2004:VlnlMg9hXAFdxALH@cluster252.mr5b7dh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster252", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
   
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = connectToMongoDB;

