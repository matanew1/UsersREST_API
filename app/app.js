const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const {PORT} = require('../config/env');

const app = express();

// Set the view engine to EJS and set the views directory
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'))


// Routes
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', userRoutes);
app.use(express.static(__dirname + '/views'));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/api/home`);
}).name = 'USER RUN & LISTEN';
