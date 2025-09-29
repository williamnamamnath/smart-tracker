const { createUser, getUsers, loginUser } = require('../handlers/manipulateUsers');

const router = require('express').Router();

//Routes for user authentication
router.post('/create-user', createUser)
.post('/login-user', loginUser)
.get('/get-users', getUsers)

module.exports = router;