const express = require('express');
const morgan = require('morgan');

const { newUser, loginUser, getUserInfo, getUsersInfo, newInquiry } = require('./handlers');

const app = express();

app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Methods',
      'OPTIONS, HEAD, GET, PUT, POST, DELETE'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', express.static(__dirname + '/'));


// Server endpoints
app.post('/register', newUser);
app.post('/contact', newInquiry);
app.post('/login', loginUser);
app.get('/user/:_id', getUserInfo);
app.get('/users', getUsersInfo);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));