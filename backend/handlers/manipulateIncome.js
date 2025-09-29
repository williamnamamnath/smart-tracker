const IncomeSchema = require("../models/IncomeModel")


//Adding new income
exports.addIncome = async (req, res) => {

    const {title, amount, category, description, date}  = req.body

    const income = IncomeSchema({
        user: req.user.id,
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
        res.status(200).json({message: 'Income added successfully', data: income})
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
    
            try {
        const income = await IncomeSchema.findById(id);
        if (!income) {
            return res.status(404).json({ message: 'Income not found' });
        }
    
        if (income.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'User not authorized' });
        }
    
        await income.remove();
        res.status(200).json({ message: 'Transaction deleted successfully' })
      } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message })
      }
}


//Updating an income 
exports.updateIncome = async (req, res) => {
    const { id } = req.params
    const updates = req.body;
    
        try {
        const income = await IncomeSchema.findById(id);
    
        if (!income) {
            return res.status(404).json({ message: 'Transaction not found' });
        }
    
        if (income.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'User not authorized' });
        }
    
        Object.assign(income, updates);
        await income.save();
        res.status(200).json({ message: 'Transaction updated successfully' })
      } catch (err) {
            res.status(500).json({ message: 'Server error', error: err.message })
      }
}