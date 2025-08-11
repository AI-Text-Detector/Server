const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

// Import configurations
const swaggerSpec = require('./config/swagger');

// Import routes
const textRoutes = require('./routes/textRoutes');
const healthRoutes = require('./routes/healthRoutes');

// Import middleware
const { errorHandler, notFound } = require('./middleware/errorHandler');

// Import utilities
const Logger = require('./utils/logger');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  Logger.info(`${req.method} ${req.path}`, {
    ip: req.ip,
    userAgent: req.get('User-Agent')
  });
  next();
});

// Routes
app.use('/api', textRoutes);
app.use('/', healthRoutes);

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 404 handler
app.use(notFound);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
