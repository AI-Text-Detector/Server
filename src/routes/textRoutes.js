const express = require('express');
const { detectText } = require('../controllers/textController');
const { validateTextInput } = require('../middleware/validation');

const router = express.Router();

// POST /detect-text - Analyze text for AI detection
router.post('/detect-text', validateTextInput, detectText);

module.exports = router;
