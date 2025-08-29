const newUser = require('./handlers/newUser');
const loginUser = require('./handlers/loginUser');
const getUserInfo = require('./handlers/getUserInfo');
const getUsersInfo = require('./handlers/getUsersInfo');
const newInquiry = require('./handlers/newInquiry');
const createExpense = require('./handlers/createExpense');
const createIncome = require('./handlers/createIncome');



module.exports = { newUser, loginUser, getUserInfo, getUsersInfo, newInquiry, createExpense, createIncome };