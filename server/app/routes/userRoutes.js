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
router.post('/users/update/:id', userController.updateUser);

// create a new user
router.post('/users/new', userController.createUser);

// delete a specific user
router.post('/users/delete/:id', userController.deleteUser);

// delete all users
router.post('/users/delete', userController.deleteAllUsers);

module.exports = router;
