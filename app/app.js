const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const {mongoURI} = require('../config/db')
const {PORT} = require('../config/env')

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

// Set the view engine to EJS and set the views directory
app.set('view engine', 'ejs');
app.set('views', './views');

// Routes
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', userRoutes);
app.use(express.static(__dirname + '/views'));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/api/home`);
}).name = 'USER RUN & LISTEN';
