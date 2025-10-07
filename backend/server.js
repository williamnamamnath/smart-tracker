const express = require('express');
const cors = require('cors');
const db = require('./db/db');
const app = express();
const webToken = require('./middleware/webToken');

require('dotenv').config();

//Require handler functions
const { newUser, loginUser, getUsers } = require('./handlers/manipulateUsers');
const { newTransaction, getUserTransactions, updateTransaction, deleteTransaction } = require('./handlers/manipulateTransactions');
const { newInquiry, getInquiries } = require('./handlers/manipulateInquiries');

const PORT = process.env.PORT;
db()

//middlewares
app.use(express.json());
app.use(cors());

//User routes
app.post('/register', newUser);
app.post('/login', loginUser);
app.get('/users', getUsers);

//Transaction routes
app.post('/new-transaction', webToken, newTransaction);
app.get('/transactions', webToken, getUserTransactions);
app.put('/edit-transaction/:id', webToken, updateTransaction);
app.delete('/delete-transaction/:id', webToken, deleteTransaction);

//Inquiry routes
app.post('/new-inquiry', webToken, newInquiry);
app.get('/inquiries', webToken, getInquiries);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));