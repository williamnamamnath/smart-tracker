const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error establishing connection to MongoDB');
        console.log(error.message);
    }
}

module.exports = {db}