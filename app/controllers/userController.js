const UserService = require("../services/userService")

// *** Home page 
exports.loadHomePage = async (_req, res) => {
  try {
    res.status(200).render('index');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};


// *** load page of update user
exports.loadUpdateUserPage = async (_req, res) => {
  const users = await UserService.getUsers();
  res.render('updateUser', {users: users});
}

// *** update a specific user
exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const { name, email, password } = req.body;
  try {
    const user = await UserService.updateUser(id, name, email, password);
    res.render('successUpdate', { user: user });
  } catch (error) {
    res.status(404).json({ message: 'User not found' });
  }
};

// *** load page of create user
exports.loadCreateUserPage = async (_req, res) => {
  res.status(200).render('newUser');
};

// *** create a new user
exports.createUser = async (req, res) => {
  const { name, email, password } = req.body; 
  try {
    const user = await UserService.createUser(name, email, password);
    res.status(201).json(user).render('successAdd');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// *** load page of all users
exports.getAllUsers = async (_req, res) => {
  try {
    const users = await UserService.getUsers();
    res.render('allUsers', { users });
  } catch (error) {
    res.status(404).json({ message: 'User not found' });
  }
};

// *** load page of all users to delete
exports.getAllUsersToDelete = async (_req, res) => {
  try {
    const users = await UserService.getUsers();
    res.render('deleteUser', { users });
  } catch (error) {
    res.status(404).json({ message: 'User not found' });
  }
};

// *** delete a specific user
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserService.getUserByIdAndDelete(id);
    const users = await UserService.getUsers();
    res.status(201).render('successDelete', { user: user, users: users }); // Pass the "user" object to the success template
  } catch (error) {
    res.status(404).json({ message: 'User not found' });
  }
};

// *** delete all users
exports.deleteAllUsers = async (_req, res) => {
  try {
    await UserService.deleteAllUsers();
    const users = await UserService.getUsers();
    res.status(201).render('successDelete', { user: null, users: users }); // Pass the "user" object to the success template
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete all users' });
  }
};

