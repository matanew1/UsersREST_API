const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/:adminId/users/:id', userController.getUserById);
// update a specific user
router.put('/:adminId/users/update/:id', userController.updateUser);
// create a new user
router.post('/:adminId/users/new', userController.createUser);
// delete a specific user
router.delete('/:adminId/users/delete/:id', userController.deleteUser);
// delete all users
router.delete('/:adminId/users/delete', userController.deleteAllUsers);

module.exports = router;
