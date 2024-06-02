const mongoose = require('mongoose');

const connectToMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://abhaywankhade200401:9529370446@aW@cluster0.b9gdvkb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = connectToMongoDB;
