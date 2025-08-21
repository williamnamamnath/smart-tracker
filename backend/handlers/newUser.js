const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI } = process.env;
const bcrypt = require('bcrypt');
const dbName = 'budgetApp';
const { v4: uuidv4 } = require("uuid");

const newUser = async (req, res) => {

    const client = new MongoClient(MONGO_URI);
    const db = client.db(dbName);
    console.log("Connected to MongoDB.");


    try {
    const { firstName, lastName, email, password, confirmPwd } = req.body;
    const requiredInfo = ["firstName", "lastName", "email", "password", "confirmPwd"];
    const missingFields = requiredInfo.filter(field => req.body[field] === undefined || req.body[field] === '');

    if (missingFields.length > 0) {
            return res.status(400).json({
                status: 400,
                message: 'At least one of the fields is blank.'
            });
        }

        if (password !== confirmPwd) {
            return res.status(400).json({
                status: 400,
                message: "Passwords do not match",
            });
        }

        const existingUser = await db.collection('users').findOne({ email });
        if (existingUser) {
            return res.status(404).json({
                status: 404,
                message: `There is already an account created with this email.`,
            });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = {
            _id: uuidv4(),
            firstName,
            lastName,
            email,
            password: hashedPassword
        }

        const insertNewUser = await db.collection('users').insertOne(newUser);
        if (!insertNewUser || !insertNewUser.insertedId) {
            return res.status(500).json({
                status: 500,
                message: "Error creating new user.",
            });
        }

        res.status(201).json({ status: 201, _id: newUser.insertedId, });

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

module.exports = newUser;