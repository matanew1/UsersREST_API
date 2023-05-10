const Admin = require("../models/adminModel");
const bcrypt = require("bcryptjs");
const mongoose = require("../../config/db");

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
            throw new Error('Admin does not exist');
          }
          const isPasswordMatch = await bcrypt.compare(password, admin.password);
          if (!isPasswordMatch) {
            throw new Error('Invalid email or password');
          }
      
          return admin;
        } catch (error) {
          throw error;
        }
    }    
    static async getAdminByEmail(email) {
        try {
            const admin = await Admin.findOne({ email });
            return admin
        } catch (error) {
            throw error;
        }
    }
    static async getSessionByEmail(email) {
        const session = await mongoose.connection.collection('sessions')
        .findOne({
          'session.user.email': email
        });
        return session;
    }
    static async getSessions() {
        try {
          const sessions = await mongoose.connection
            .collection('sessions')
            .find()
            .toArray();          
          const mappedSessions = sessions.map(session => session._id);
          return mappedSessions;
        } catch (error) {
          throw error;
        }
      }
      
}

module.exports = AdminService;