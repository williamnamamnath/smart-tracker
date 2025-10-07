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
    description: {
        type: String,
        required: true,
        trim: true,
        maxLength: 500
    },
    date: { 
    type: Date, 
    required: true, 
    default: Date.now 
    },
    createdAt: { 
    type: Date, 
    default: Date.now 
}
}, {timestamps: true});

module.exports = mongoose.model('inquiry', InquirySchema)