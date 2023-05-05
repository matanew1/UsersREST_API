const AdminService = require("../services/adminService")

exports.createAdmin = async (req, res) => {
  const { name, email, password } = req.body; 
  try {
    const admin = await AdminService.createAdmin(name, email, password);
    res.status(201).json(admin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.loginAdmin = async (req, res) => {
    const { email, password } = req.body; 
    try {
      const admin = await AdminService.loginAdmin(email, password);
      res.status(201).json(admin);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
}
exports.getAllUsers = async (req, res) => {
  try {
    const adminId = req.params.adminId;
    const users = await AdminService.getUsers(adminId);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send('Internal server error');
  }
};

