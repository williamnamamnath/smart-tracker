const mongoose = require('mongoose');


const InquirySchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    comments: {
        type: String,
        required: true,
        trim: true,
        maxLength: 500
    }
}, {timestamps: true});

module.exports = mongoose.model('inquiry', InquirySchema)