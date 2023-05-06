const AdminService = require("../services/adminService")
const {connectAdmins} = require("../../config/env")

exports.createAdmin = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Check if admin already exists
    if (connectAdmins.has(email)) {
      return res.status(400).json({ message: 'Admin already exists' });
    }
    // Create the admin
    const admin = await AdminService.createAdmin(name, email, password);

    // Set session data for the newly created admin
    req.session.isLoggedIn = true;
    req.session.email = admin.email;
    connectAdmins.set(admin.email, req.sessionID);

    res.status(201).json(admin);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
exports.logoutAdmin = async (req, res) => {
  if (req.session.isLoggedIn) {
    const email = req.session.email;
    // Delete the admin from the connectAdmins object
    if (connectAdmins.has(email)) {
      connectAdmins.delete(email);
    }
    // Destroy the session
    req.session.destroy((error) => {
      if (error) {
        console.log('Error destroying session:', error);
        res.status(500).json({ message: 'Internal server error' });
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
    try { // is logged in
      const admin = await AdminService.loginAdmin(email, password);

      if(connectAdmins.has(admin.email)) {
        const sessionID = connectAdmins.get(admin.email);
        const sessionStore = req.sessionStore;
        sessionStore.destroy(sessionID, (error) => {
          if (error) { console.log('Error destroying session:', error); }
          req.session.regenerate(() => {
            req.session.isLoggedIn = true;
            req.session.email = admin.email;
            connectAdmins.set(admin.email, req.sessionID);
          });
        }); 
        res.status(400).json({ message: "Admin is already logged in" });
      } 
      else { // is not logged in
        req.session.isLoggedIn = true;
        req.session.email = admin.email;
        connectAdmins.set(admin.email, req.sessionID);
        res.status(200).json(admin);       
      }        
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
