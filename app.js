const express = require('express');
const app = express();
const cors = require('cors');
const userRouter = require('./routes/userRouter');

//============= MIDDLEWARES =================//
app.use(cors());
app.use(express.json());

//=============== ROUTES ===================//
app.use('/api/users', userRouter);

module.exports = app;
