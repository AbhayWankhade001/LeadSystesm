const mongoose = require('mongoose');

// Define the schema for ClientEmails
const ClientEmailsSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    isSent: {
        type: Boolean,
        default: false
    },
    sentAt: {
        type: Date
    }
});

// Create the model for ClientEmails
const ClientEmails = mongoose.model('ClientEmails', ClientEmailsSchema);

module.exports = ClientEmails;
