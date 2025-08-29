const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI } = process.env;
const { v4: uuidv4 } = require('uuid');
const dbName = 'budgetApp';

const createExpense = async (req, res) => {
    const client = new MongoClient(MONGO_URI);

    try {
        await client.connect();
        console.log('Connected to MongoDB.');
        
        const db = client.db(dbName);
        const allTransactions = db.collection('transactions');
        const { amount, category, otherCategory, newCategory, description, date } = req.body;

        // To insert date function to know when each transaction was entered/created
        const newTransaction = {
            _id: uuidv4(),
            amount,
            category,
            otherCategory, 
            newCategory,
            description,
            date
        };

        const result = await allTransactions.insertOne(newTransaction);
        if (!result || !result.insertedId) {
            return res.status(500).json({
                status: 500,
                message: "Failed to enter trnsaction in the database.",
            });
        }
        const transactionId = newTransaction._id;
        return res.status(201).json({
            status: 201,
            message: "Transaction entered successfully.",
            _id: transactionId
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message,
        });
    } finally {
        await client.close();
        console.log('Disconnected from MongoDB.');
        
    }
}

module.exports = createExpense;