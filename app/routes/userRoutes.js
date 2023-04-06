const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Home page
router.get('/home', (req, res) => {res.render('index')});

// load page of create user
router.get('/users/new', (req, res) => {res.render('newUser')}); 

// load page of all users
router.get('/users', userController.getAllUsers);

// load page of all users to delete
router.get('/users/delete',userController.getAllUsersToDelete); 

// create a new user
router.post('/users/new', userController.createUser);

// delete a specific user
router.post('/users/delete/:id', userController.deleteUser);

// delete all users
router.post('/users/delete', userController.deleteAllUsers);

// update a specific user
router.post('/users/update/:id', userController.updateUser);

module.exports = router;
