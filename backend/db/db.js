const mongoose = require('mongoose');
const logger = require('../utils/logger');

async function dbConnect() {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      logger.info('MongoDB connection established');
    })
    .catch(error => {
      logger.error('MongoDB connection error:', error);
    });
}

module.exports = dbConnect;
