const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/usersDB';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Failed to connect to MongoDB', error);
});

module.exports = mongoose;
