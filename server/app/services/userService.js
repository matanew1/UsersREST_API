const Admin = require("../models/adminModel");
const User = require("../models/userModel");

class UserService  {
    static async deleteAllUsers() {
        await User.deleteMany({});
    }
    static async getUserById(id, adminId) {
      try {
        const admin = await Admin.findById(adminId).populate('users');
        const user = admin.users.find(user => user._id.equals(id));
        if (!user) {
          throw new Error('User not found in admin list');
        } 
        return user;
      } catch (error) {
        throw error;
      }
    } 
    static async getUserByIdAndDelete(id, adminId) {
        try {
          const admin = await Admin.findById(adminId).populate('users');
          const userToDelete = admin.users.find(user => user._id.equals(id));
          if (!userToDelete) {
            throw new Error('User not found in admin list');
          }
          const deletedUser = await User.findByIdAndDelete(id);
          admin.users = admin.users.filter(user => !user._id.equals(id));
          await admin.save();
          return deletedUser;
        } catch (error) {
          throw error;
        }
      }    
    static async createUser(name, email, password, adminId) {
        try {
          const admin = await Admin.findById(adminId);
          const newUser = new User({ name, email, password });
          if (!admin) {
            throw new Error('Admin not found');
          }
          admin.users.push(newUser._id);
          await newUser.save();
          await admin.save();
          return newUser;
        } catch (error) {
          throw error;
        }
      }
    static async updateUser(id, name, email, password, adminId) {
        try {
          const admin = await Admin.findById(adminId).populate('users');
          const userToUpdate = admin.users.find(user => user._id.equals(id));
          if (!userToUpdate) {
            throw new Error('User not found in admin list');
          }
          const updateUser = await User.findByIdAndUpdate(
            id,
            { name, email, password },
            { new: true }
            );
          admin.users = admin.users.filter(user => !user._id.equals(id));
          await admin.save();
          return updateUser;
        } catch (error) {
            throw error;
        }
    }    
}

module.exports = UserService;