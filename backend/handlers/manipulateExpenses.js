const ExpensesSchema = require("../models/ExpensesModel")


//Adding new expense
exports.addExpense = async (req, res) => {

    const {title, amount, category, description, date}  = req.body

    const expense = ExpensesSchema({
        user: req.user.id,
        title,
        amount,
        category,
        description,
        date
    })

    try {
        if(!title || !category || !description || !date){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(!amount === 'number'){
            return res.status(400).json({message: 'Please enter a number'})
        }
        await expense.save()
        res.status(200).json({message: 'Expense added successfully', data: expense})
    } catch (error) {
        res.status(500).json({message: 'Server error', error: error})
    }
}


//Getting all expenses
exports.getExpenses = async (req, res) =>{
    try {
        const expenses = await ExpensesSchema.find({ user: req.user.id }).sort({createdAt: -1})
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({message: 'Server error'})
    }
}


//Deleting an expense
exports.deleteExpense = async (req, res) =>{

    const {id} = req.params;

        try {
    const expense = await ExpensesSchema.findById(id);
    if (!expense) {
        return res.status(404).json({ message: 'Expense not found' });
    }

    if (expense.user.toString() !== req.user.id) {
        return res.status(401).json({ message: 'User not authorized' });
    }

    await expense.remove();
    res.status(200).json({ message: 'Transaction deleted successfully' })
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message })
  }
}


//Updating an income 
exports.updateExpense = async (req, res) => {

    const { id } = req.params
    const updates = req.body;

    try {
    const expense = await ExpensesSchema.findById(id);

    if (!expense) {
        return res.status(404).json({ message: 'Transaction not found' });
    }

    if (expense.user.toString() !== req.user.id) {
        return res.status(401).json({ message: 'User not authorized' });
    }

    Object.assign(expense, updates);
    await expense.save();
    res.status(200).json({ message: 'Transaction updated successfully' })
  } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message })
  }
}