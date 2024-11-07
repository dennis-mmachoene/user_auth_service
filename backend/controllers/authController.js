// ./backend/controllers/authController.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// Signup controller
exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashedPassword });
    res.status(201).json({ user, token: generateToken(user.id) });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

// Login controller
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({ user, token: generateToken(user.id) });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Dashboard controller
exports.dashboard = async (req, res) => {
  try {
    const userId = req.user.id;  // Assuming user ID is set in `req.user` by a middleware after token verification
    const userData = await User.findByPk(userId, {
      attributes: ['id', 'username', 'email'],
      // Include any additional data you want to show on the dashboard
    });
    res.status(200).json({ userData });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
