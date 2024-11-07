// ./backend/config/db.js

const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || 'db', // Updated to use 'db' as the default host
    dialect: 'mysql',
  }
);

module.exports = sequelize;
