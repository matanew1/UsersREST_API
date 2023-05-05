const mongoose = require('../../config/db');
const bcrypt = require("bcryptjs");

const { Schema } = mongoose;

const adminSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    users: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: false 
    }]
  });
  
  // adminSchema.pre('save', async function() {
  //   try {
  //     const admin = this;
  //     const salt = await bcrypt.genSalt(10);
  //     const hashpass = await bcrypt.hash(admin.password, salt);
  //     admin.password = hashpass;
  //   } catch (error) {
  //     throw error;
  //   }
  // });
  
  const Admin = mongoose.model('Admin', adminSchema);
  
  module.exports = Admin;
  