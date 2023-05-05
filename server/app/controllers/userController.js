const AdminService = require("../services/adminService");
const UserService = require("../services/userService")


// *** update a specific user 
exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const adminId = req.params.adminId;
  const { name, email, password } = req.body;
  try {
    const user = await UserService.updateUser(id, name, email, password, adminId);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: 'User not found' });
  }
};

exports.getUserById = async (req, res) => {
  const id = req.params.id;
  const adminId = req.params.adminId;
  try {
    const user = await UserService.getUserById(id, adminId);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: 'User not found' });
  }
};
// *** create a new user - TEST
exports.createUser = async (req, res) => {
  const adminId = req.params.adminId;
  const { name, email, password } = req.body; 
  try {
    const user = await UserService.createUser(name, email, password, adminId);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// *** delete a specific user - TEST
exports.deleteUser = async (req, res) => {
  const adminId = req.params.adminId;
  const  id  = req.params.id;
  try {
    const user = await UserService.getUserByIdAndDelete(id, adminId);
    const users = await UserService.getUsers();
    res.status(201).json(user); 
  } catch (error) {
    res.status(404).json({ message: 'User not found' });
  }
};
// *** delete all users - TEST
exports.deleteAllUsers = async (_req, res) => {
  try {
    await UserService.deleteAllUsers();
    const users = await UserService.getUsers();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete all users' });
  }
};

