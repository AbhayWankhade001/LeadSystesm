const mongoose = require('mongoose');

const ClientEmailDetailsSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true, // Ensure email is unique
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const ClientEmailDetails = mongoose.model('ClientEmailDetails', ClientEmailDetailsSchema);

module.exports = ClientEmailDetails;
