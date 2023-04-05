const fs = require('fs');
const constants = require('./constants');
const User = require('./user');

class UserService {
  constructor() {
    this.usersFilePath = constants.usersFilePath;
    this.users = this.readUsers(this.usersFilePath);
    this.numOfUsers = this.users.length;
  }

  readUsers(filePath) {
    const usersData = fs.readFileSync(filePath);
    const users = JSON.parse(usersData);
    return users.map(userData => new User(userData.id, userData.name, userData.age, userData.type));
  }

  writeUsers() {
    if (!this.usersFilePath) {
      console.log("filePath is undefined");
      return;
    }
  
    const usersData = JSON.stringify(this.users, null, 2);
    fs.writeFileSync(this.usersFilePath, usersData);
  }
  
  deleteAllUsers() {
    const emptyUsers = JSON.stringify([]);
    fs.writeFileSync(this.usersFilePath, emptyUsers);
    this.users = this.getAllUsers();
    return this.users;
  }

  deleteUserById(deleteUserId) {
    const foundUser = this.users.find(user => user.id === Number(deleteUserId));
    if(!foundUser) return false;
    this.users.pop(foundUser);
    this.numOfUsers = this.users.length;
    this.writeUsers();
    return true;
  }

  getAllUsers() {
    return this.users;
  }

  addUser(user) {
    const newUser = this.JsonToUser(user);
    this.users.push(newUser);
    this.numOfUsers++;
    this.writeUsers();
  }

  updateUser(userToUpdate) {
    const foundUser = this.users.find(user => user.id === userToUpdate.id);
    
    if (!foundUser) {
      console.log(`User with id ${userToUpdate.id} not found.`);
      return;
    }
    const updatedUser = this.JsonToUser(foundUser);
    
    this.users = this.users.map(user => {
      if (user.id === userToUpdate.id) return updatedUser; 
      else return user;
    });
    
    this.writeUsers();
  }
  
  getUserById(id) {
    return this.users.find(user => user.id === Number(id));
  } 

  JsonToUser(user) {
    return new User(
      user.id,
      user.name,
      user.age,
      user.type
    );
  }
}

module.exports = UserService;