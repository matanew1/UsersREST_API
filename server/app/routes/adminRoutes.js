const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// create a new admin
router.post('/admin/new', adminController.createAdmin);

// login for admin user
router.post('/login', adminController.loginAdmin);

// load page of all users
router.get('/:adminId/users', adminController.getAllUsers);


module.exports = router;