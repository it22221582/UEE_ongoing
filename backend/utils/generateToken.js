//Utility to generate JWT tokens

// utils/generateToken.js
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  // Sign a token with the user's id and return it
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d', // Token valid for 30 days
  });
};

module.exports = generateToken;
