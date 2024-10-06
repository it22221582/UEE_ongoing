//User schema for all user types (admin, volunteer, restaurant, orphanage)

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String
  },
  address: {
    type: String
  },
  userType: { 
    type: String, 
    enum: ['volunteer', 'restaurantOwner', 'orphanageOwner', 'admin'], 
    required: true 
  },
  registeredAt: {
    type: Date,
    default: Date.now
  }
  // Any other user-specific fields (e.g., profile picture, etc.)
});

const User = mongoose.model('User', userSchema);
module.exports = User;
