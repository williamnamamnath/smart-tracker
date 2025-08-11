const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI } = process.env;
const dbName = 'budgetApp';
const { v4: uuidv4 } = require("uuid");

const newInquiry = async (req, res) => {

    const client = new MongoClient(MONGO_URI);
    const db = client.db(dbName);
    console.log("Connected to MongoDB.");
    

    try {
    const { firstName, lastName, email, comments } = req.body;
    const requiredInfo = ["firstName", "lastName", "email", "comments"];
    const missingFields = requiredInfo.filter(field => req.body[field] === undefined || req.body[field] === '');

    if (missingFields.length > 0) {
            return res.status(400).json({
                status: 400,
                message: 'At least one of the fields is blank.'
            });
        }

        const newInquiry = {
            _id: uuidv4(),
            firstName,
            lastName,
            email,
            comments
        }

        const insertNewInquiry = await db.collection('inquiries').insertOne(newInquiry);
        if (!insertNewInquiry || !insertNewInquiry.insertedId) {
            return res.status(500).json({
                status: 500,
                message: "Error creating new inquiry.",
            });
        }

        res.status(201).json({ status: 201, _id: newInquiry.insertedId, });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: error.message,
        });    
    } finally {
        await client.close();
        console.log('MongoDB connection closed.');
        
    }
};

module.exports = newInquiry;