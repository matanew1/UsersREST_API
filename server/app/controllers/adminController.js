const AdminService = require("../services/adminService")

exports.createAdmin = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Check if admin already exists
    const existingAdmin = await AdminService.getAdminByEmail(email);
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists' });
    }
    // Create the admin
    const admin = await AdminService.createAdmin(name, email, password);
    // Set session data for the newly created admin in MongoDB
    req.session.user = {
      email: admin.email,
      isLoggedIn: true,
    };
    res.status(201).json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.logoutAdmin = async (req, res) => {
  if (req.session.user.isLoggedIn) {
    // Destroy the session
    req.session.destroy((error) => {
      if (error) {
        res.status(500).json({ message: 'Error destroying session:', error });
      } else {
        res.status(200).json({ message: 'Logout successful' });
      }
    });
  } else {
    res.status(200).json({ message: 'No active session to logout' });
  }
};
exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const session = await AdminService.getSessionByEmail(email);
    if (session) {
      return res.status(400).json({ message: 'Admin is already logged in' });
    }
    const admin = await AdminService.loginAdmin(email, password);

    req.session.user = {
      email: admin.email,
      isLoggedIn: true,
    };

    res.status(200).json(admin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.getAllUsers = async (req, res) => {
  try {
    const adminId = req.params.adminId;
    const users = await AdminService.getUsers(adminId);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send('Internal server error');
  }
};
