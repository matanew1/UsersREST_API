const express = require('express');
const session = require('express-session');
const cors = require('cors');
const MongoDBStore = require('connect-mongodb-session')(session);
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

// use middlewares
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const store = new MongoDBStore({
  uri: 'mongodb://localhost:27017/usersDB',
  collection: 'sessions',
});
store.on('error', (error) => {
  console.log('Session store error:', error);
});
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
      maxAge: 86400000, // Session duration in milliseconds (e.g., 24 hours)
    },
  })
);

app.use('/api', adminRoutes, userRoutes);

module.exports = app;

