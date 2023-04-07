const User = require("../models/userModel");

class UserService  {
    static async deleteAllUsers() {
        await User.deleteMany({});
    }
    static async getUserByIdAndDelete(id) {
        try {
            const user = await User.findByIdAndDelete(id);
            return user;
        } catch (error) {
            throw error;
        }
    }
    static async createUser(name, email, password) {
        try {
            const newUser = new User({ name, email, password });
            return await newUser.save();
        } catch (error) {
            throw error;
        }
    }
    static async getUsers() {
        try {
            return await User.find();
        } catch (error) {
            throw error;
        }        
    }
    static async updateUser(id, name, email, password) {
        try {
            const user = await User.findByIdAndUpdate(
                id,
                { name, email, password },
                { new: true }
            );
            return user;
        } catch (error) {
            throw error;
        }
    }    
}

module.exports = UserService;