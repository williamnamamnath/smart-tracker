const { addExpense, getExpenses, deleteExpense, updateExpense } = require('../handlers/manipulateExpenses');
const { addIncome, getIncomes, deleteIncome, updateIncome } = require('../handlers/manipulateIncome');

const router = require('express').Router();

//Routes for income
router.post('/add-income', addIncome)
.get('/get-incomes', getIncomes)
.delete('/delete-income/:id', deleteIncome)
.delete('/update-income/:id', updateIncome)

//Routes for expenses
.post('/add-expense', addExpense)
.get('/get-expenses', getExpenses)
.delete('/delete-expense/:id', deleteExpense)
.delete('/update-expense/:id', updateExpense)

module.exports = router;