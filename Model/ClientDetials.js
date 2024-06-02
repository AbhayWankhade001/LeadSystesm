const mongoose = require('mongoose');

const ClientDetailsSchema = new mongoose.Schema({
    accountName: {
      type: String,
    },
    postContent: {
      type: String,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    socialLinks: {
      type: String,
    },
    Desktop_pic: {
      type: String,
    }
});

const ClientDetails = mongoose.model('ClientDetails', ClientDetailsSchema);

module.exports = ClientDetails;
