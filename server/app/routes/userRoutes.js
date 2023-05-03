const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Home page
router.get('/home', userController.loadHomePage);

// load page of create user
router.get('/users/new', userController.loadCreateUserPage); 

// load page of all users
router.get('/users', userController.getAllUsers);

// load page of all users to delete
router.get('/users/delete',userController.getAllUsersToDelete); 

// load page of update user
router.get('/users/update', userController.loadUpdateUserPage);

// update a specific user
router.put('/users/update/:id', userController.updateUser);

// create a new user
router.post('/users/new', userController.createUser);

// login for admin user
router.post('/login', userController.loginAdmin);

// delete a specific user
router.delete('/users/delete/:id', userController.deleteUser);

// delete all users
router.delete('/users/delete', userController.deleteAllUsers);


module.exports = router;
