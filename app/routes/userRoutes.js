const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/home', (req, res) => {res.render('index')});
router.post('/users', userController.createUser);
router.get('/users:id', userController.getUserById);
router.get('/users', userController.getAllUsers);
router.put('/users:id', userController.updateUser);
router.delete('/users:id', userController.deleteUser);

module.exports = router;
