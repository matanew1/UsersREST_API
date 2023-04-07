const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://matan:matan@cluster0.bgo3pus.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Failed to connect to MongoDB', error);
});

module.exports = mongoose;
