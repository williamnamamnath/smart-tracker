const IncomeSchema = require("../models/IncomeModel")


//Adding new income
exports.addIncome = async (req, res) => {

    const {title, amount, category, description, date}  = req.body

    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        if(!title || !amount || !category || !description || !date){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(!amount === 'number'){
            return res.status(400).json({message: 'Please enter a number'})
        }
        await income.save()
        res.status(200).json({message: 'Income added successfully'})
    } catch (error) {
        res.status(500).json({message: 'Server error', error: error})
    }
}


//Getting all incomes
exports.getIncomes = async (req, res) =>{
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Server error'})
    }
}


//Deleting an income
exports.deleteIncome = async (req, res) =>{

    const {id} = req.params;

    IncomeSchema.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({message: 'Income deleted successfully'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server error'})
        })
}


//Updating an income 
exports.updateIncome = async (req, res) => {
    const { id } = req.params
    const { title, amount, category, description, date } = req.body

    try {
        if (!title || !amount || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required!' })
        }
        if (typeof amount !== 'number') {
            return res.status(400).json({ message: 'Please enter a valid number for amount' })
        }

        const updated = await IncomeSchema.findByIdAndUpdate(
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