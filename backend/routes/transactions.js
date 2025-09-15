const { addExpense, getExpenses, deleteExpense, updateExpense } = require('../handlers/manipulateExpenses');
const { addIncome, getIncomes, deleteIncome, updateIncome } = require('../handlers/manipulateIncome');
const { createUser, getUsers, loginUser } = require('../handlers/manipulateUsers');
const { createInquiry, getInquiries } = require('../handlers/manipulateInquiries');

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

//Routes for user authentication
.post('/create-user', createUser)
.post('/login-user', loginUser)
.get('/get-users', getUsers)

//Routes for inquiries
.post('/create-inquiry', createInquiry)
.get('/get-inquiries', getInquiries)

module.exports = router;