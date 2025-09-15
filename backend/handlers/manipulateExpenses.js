const ExpensesSchema = require("../models/ExpensesModel")


//Adding new expense
exports.addExpense = async (req, res) => {

    const {title, amount, category, description, date}  = req.body

    const expense = ExpensesSchema({
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
        res.status(200).json({message: 'Expense added successfully'})
    } catch (error) {
        res.status(500).json({message: 'Server error', error: error})
    }
}


//Getting all expenses
exports.getExpenses = async (req, res) =>{
    try {
        const expenses = await ExpensesSchema.find().sort({createdAt: -1})
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({message: 'Server error'})
    }
}


//Deleting an expense
exports.deleteExpense = async (req, res) =>{

    const {id} = req.params;

    ExpensesSchema.findByIdAndDelete(id)
        .then((expense) =>{
            res.status(200).json({message: 'Expense deleted successfully'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server error'})
        })
}


//Updating an income 
exports.updateExpense = async (req, res) => {
    const { id } = req.params
    const { title, amount, category, description, date } = req.body

    try {
        if (!title || !amount || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required!' })
        }
        if (typeof amount !== 'number') {
            return res.status(400).json({ message: 'Please enter a valid number for amount' })
        }

        const updated = await ExpensesSchema.findByIdAndUpdate(
            id,
            { title, amount, category, description, date },
            { new: true, runValidators: true }
        )

        if (!updated) {
            return res.status(404).json({ message: 'Transaction not found' })
        }

        res.status(200).json({
            message: 'Transaction updated successfully',
            transaction: updated
        })
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message })
    }
}