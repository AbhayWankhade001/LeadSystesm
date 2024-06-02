// Import mongoose
const mongoose = require('mongoose');

// Define the schema for profile links
const profileLinkSchema = new mongoose.Schema({
  profileLink: {
    type: String,
    required: true,
    unique: true // Ensures each profile link is unique
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a Mongoose model from the schema
const ProfileLink = mongoose.model('ProfileLink', profileLinkSchema);

// Export the model
module.exports = ProfileLink;
