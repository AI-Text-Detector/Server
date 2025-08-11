const aiDetectionService = require('../services/aiDetectionService');

const getHealth = (req, res) => {
  const healthStatus = aiDetectionService.getHealthStatus();
  res.json(healthStatus);
};

module.exports = {
  getHealth
};
