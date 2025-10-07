const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
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
    phone: {
        type: Number, 
        required: true,
        trim: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    postcode: {
        type: mongoose.Schema.Types.Mixed, 
        required: true,
        trim: true,
        unique: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
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

module.exports = mongoose.model('user', UserSchema)