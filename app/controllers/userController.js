const User = require('../models/userModel');

// Home page
exports.loadHomePage = async (req, res) => {
  res.render('index');
};

// load page of update user
exports.loadUpdateUserPage = async (req, res) => {
  const users = await User.find();
  res.render('updateUser', {users: users});
}

// update a specific user
exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const { name, email, password } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { name, email, password },
      { new: true }
    );
    const users = await User.find();
    res.render('successUpdate', { user: user });
  } catch (error) {
    res.status(404).json({ message: 'User not found' });
  }
};

// load page of create user
exports.loadCreateUserPage = async (req, res) => {
  res.render('newUser');
};

// create a new user
exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  try {
    await user.save();
    res.status(201).render('successAdd', { user: user }); // Pass the "user" object to the success template
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: 'User not found' });
  }
};

// load page of all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.render('allUsers', { users });
  } catch (error) {
    res.status(404).json({ message: 'User not found' });
  }
};

// load page of all users to delete
exports.getAllUsersToDelete = async (req, res) => {
  try {
    const users = await User.find();
    res.render('deleteUser', { users });
  } catch (error) {
    res.status(404).json({ message: 'User not found' });
  }
};

// delete a specific user
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    const users = await User.find();
    res.status(201).render('successDelete', { user: user, users: users }); // Pass the "user" object to the success template
  } catch (error) {
    res.status(404).json({ message: 'User not found' });
  }
};

// delete all users
exports.deleteAllUsers = async (req, res) => {
  try {
    await User.deleteMany({});
    const users = await User.find();
    res.status(201).render('successDelete', { user: null, users: users }); // Pass the "user" object to the success template
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete all users' });
  }
};

