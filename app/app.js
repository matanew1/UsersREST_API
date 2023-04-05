const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const {mongoURI} = require('../config/db')
const {PORT} = require('../config/env')

function run() {
  const app = express();

  // Connect to the MongoDB database
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });

  // Routes
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api/users', userRoutes);

  app.listen(PORT, () => {
    console.log(`https://localhost:${PORT}`);
  }).name = 'USER RUN & LISTEN';
}

exports.module = run;

