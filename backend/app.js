const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const logger = require('./utils/logger');
const dbConnect = require('./db/db');
const verifyToken = require('./middlewares/auth/verifyToken');
const authRoutes = require('./routes/auth/authRoutes');
const userRoutes = require('./routes/dashboard/dashboardRoutes');

dotenv.config();

const app = express();
logger.info('Initializing application...');

dbConnect();

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

// Auhorization endpoint
app.use('/api/auth', authRoutes);
// User routes
app.use('/api/users', verifyToken, userRoutes);

app.listen(process.env.PORT, () => {
  logger.info(`Server is running on port ${process.env.PORT}`);
});
