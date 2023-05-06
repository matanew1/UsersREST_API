const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

// use middlewares
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'mb#key', // Replace with your own secret key
  resave: false,
  saveUninitialized: false
}));
app.use('/api', adminRoutes, userRoutes);

module.exports = app;

