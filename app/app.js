const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const { PORT } = require('../config/env');

const app = express();

// use middlewares
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', userRoutes);

module.exports = app;

