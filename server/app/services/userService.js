const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

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
    static async createUser(name, email, password, isAdmin) {
        try {
            const newUser = new User({ name, email, password, isAdmin});
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

    static async loginAdmin(email, password, isAdmin) {
        try {
            const user = await User.findOne({ email });
            if (!user) {
                throw new Error('Invalid email or password');
            }
            const isPasswordMatch = await bcrypt.compare(password, user.password);
            if (!isPasswordMatch) {
                throw new Error('Invalid email or password');
            }
            if (isAdmin && !user.isAdmin) {
                throw new Error('Unauthorized access');
            }
            return user;
        } catch (error) {
            throw error;
        }
    }
    
}

module.exports = UserService;