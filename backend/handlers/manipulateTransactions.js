const express = require('express');
const router = express.Router();
const webToken = require('../middleware/webToken');
const TransactionSchema = require('../models/TransactionModel');


// Create transaction
const newTransaction = async (req, res) => {

  const {type, title, amount, category, description, date} = req.body

    const transaction = TransactionSchema({
        user: req.user.id,
        type,
        title,
        amount,
        category,
        description,
        date
    });

    try {
        if(!title || !type || !category || !description || !date){
            return res.status(400).json({message: 'All fields are required!'})
        }

        if(typeof amount !== 'number'){ 
            return res.status(400).json({ message: 'Please enter a number' })
        }

        await transaction.save()
        res.status(200).json({ 
            message: 'Transaction added successfully', 
            data: transaction
        })
    } catch (error) {
        res.status(500).json({message: 'Server error', error: error})
    }
};


// Get all transactions for user
const getUserTransactions = async (req, res) => {

  try {
    const transactions = await TransactionSchema.find({ user: req.user.id }).sort({ date: -1 });
    res.status(200).json({ 
            message: 'Transactions retrieved successfully', 
            data: transactions
        });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};


// Update transaction
const updateTransaction = async (req, res) => {

  const { id } = req.params;
  const updates = req.body;

  try {
    const transaction = await TransactionSchema.findById(id);
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' })
    };

    if (transaction.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' })
    };

    Object.assign(transaction, updates);
    await transaction.save();

    res.status(200).json({ message: 'Transaction updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};


// Delete transaction
const deleteTransaction = async (req, res) => {

  const { id } = req.params;

  try {
    const transaction = await Transaction.findById(id);
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' })
    };

    if (transaction.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' })
    };

    await transaction.remove();
    res.json({ message: 'Transaction removed' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

module.exports = {
  newTransaction,
  getUserTransactions,
  updateTransaction,
  deleteTransaction
};
