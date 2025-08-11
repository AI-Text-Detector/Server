const app = require('./app');
const Logger = require('./utils/logger');

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  Logger.info(`Server running on port ${PORT}`);
  Logger.info(`Health check: http://localhost:${PORT}/health`);
  Logger.info(`API Documentation: http://localhost:${PORT}/api-docs`);
  Logger.info(`Text Analysis API: http://localhost:${PORT}/api/detect-text`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  Logger.info('SIGTERM received, shutting down gracefully');
  server.close(() => {
    Logger.info('Process terminated');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  Logger.info('SIGINT received, shutting down gracefully');
  server.close(() => {
    Logger.info('Process terminated');
    process.exit(0);
  });
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  Logger.error('Unhandled Promise Rejection:', err);
  server.close(() => {
    process.exit(1);
  });
});

module.exports = server;
