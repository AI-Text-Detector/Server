const express = require('express');
const { getHealth } = require('../controllers/healthController');

const router = express.Router();

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check endpoint
 *     description: Returns the health status of the API server
 *     tags: [System]
 *     responses:
 *       200:
 *         description: Server is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "OK"
 *                 message:
 *                   type: string
 *                   example: "AI Text Detector API is running"
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                 apiKeyConfigured:
 *                   type: boolean
 *                   example: true
 *             example:
 *               status: "OK"
 *               message: "AI Text Detector API is running"
 *               timestamp: "2023-01-01T00:00:00.000Z"
 *               apiKeyConfigured: true
 */
// GET /health - Health check endpoint
router.get('/health', getHealth);

module.exports = router;
