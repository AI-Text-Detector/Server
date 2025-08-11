const express = require('express');
const { getHealth } = require('../controllers/healthController');

const router = express.Router();

// GET /health - Health check endpoint
router.get('/health', getHealth);

module.exports = router;
