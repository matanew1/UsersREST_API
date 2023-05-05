const Admin = require("../models/adminModel");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

class AdminService  {
    static async getUsers(adminId) {
        try {
            const admin = await Admin.findById(adminId);
            return admin.users;
        } catch (error) {
            throw error;
        }        
    }
    static async createAdmin(name, email, password) {
        try {
            const newAdmin = new Admin({
                name: name,
                email: email,
                password: password
            });            
            return await newAdmin.save();
        } catch (error) {
            throw error;
        }
    }
    static async loginAdmin(email, password) {
        try {
            const admin = await Admin.findOne({ email });
            if (!admin) {
                throw new Error('Admin not exist');
            }
            const isPasswordMatch = password === admin.password;
            if (!isPasswordMatch) {
                throw new Error('Invalid email or password');
            }
            return admin;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AdminService;