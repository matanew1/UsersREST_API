const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/home', (req, res) => {res.render('index')}); // Home page
router.get('/users/new', (req, res) => {res.render('newUser')}); // load page of create user

router.get('/users', userController.getAllUsers);
router.get('/users/delete',userController.getAllUsersToDelete); 

router.post('/users/new', userController.createUser);
router.post('/users/delete/:id', userController.deleteUser);
router.post('/users/delete', userController.deleteAllUsers);
 
router.put('/users/update/:id', userController.updateUser);

module.exports = router;
