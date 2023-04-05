const express = require('express');
const constants = require('./constants');
const UserService = require('./userService');
const userService = new UserService();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {    
    res.status(200).send('Users API');
}).name = 'USER API ROOT';

app.get('/api/users', (req, res) => {
    const allUsers = userService.getAllUsers();
    if (allUsers.length === 0) {
        res.status(404).send(`There are no users !`);
    } else {
        res.status(200).send(allUsers);    
    }
}).name = 'GET ALL USERS';

app.get('/api/users/:id', (req, res) => {
    const userById = userService.getUserById(Number(req.params.id));
    if (!userById) {
        res.status(404).send(`The user with id = ${req.params.id} is not exist !`);
    } else {
        res.status(200).send(userById);
    }
}).name = 'GET USER BY ID';

app.post('/api/users', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const type = req.body.type;
    
    if (!name || !age || !type) {
        res.status(400).send('Bad request. Name, age, and type are required fields.');
    } else if (typeof age !== 'number' || age < 0) {
        res.status(400).send('Bad request. Age must be a positive number.');
    } else {
        const newUser = {
            "id": userService.numOfUsers + 1,
            "name": name,
            "age": age,
            "type": type   
        };
        userService.addUser(newUser);
        const allUsers = userService.getAllUsers();
        res.status(200).send(allUsers);
    }
}).name = 'CREATE USER';

app.delete('/api/users', (req, res) => {
    userService.deleteAllUsers();
    res.status(200).send('All users have been deleted.');
}).name = 'DELETE ALL USERS';

app.delete('/api/users/:id', (req, res) => {
    if(userService.deleteUserById(req.params.id))
        res.status(200).send(`User with id = ${req.params.id} deleted !`);
    else
        res.status(400).send(`Bad request. User id = ${req.params.id} is not exist !.`);
}).name = 'DELETE USER BY ID';

app.put('/api/users/:id', (req, res) => {
    const userToUpdate = userService.getUserById(req.params.id);
    if (!userToUpdate) res.status(404).send(`The user with id = ${req.params.id} does not exist!`);
    else {
        const { name, age, type } = req.body;
        if (name) userToUpdate.name = name;
        if (age) userToUpdate.age = age;
        if (type) userToUpdate.type = type;
        userService.updateUser(userToUpdate);
        res.status(200).send(userToUpdate);
    }
}).name ='UPDATE USER BY ID WITH JSON';

app.listen(constants.port, () => {
    console.log(constants.url);
}).name = 'USER RUN & LISTEN';
