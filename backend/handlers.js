const newUser = require('./handlers/newUser');
const loginUser = require('./handlers/loginUser');
const getUserInfo = require('./handlers/getUserInfo');
const getUsersInfo = require('./handlers/getUsersInfo');
const newInquiry = require('./handlers/newInquiry');



module.exports = { newUser, loginUser, getUserInfo, getUsersInfo, newInquiry };