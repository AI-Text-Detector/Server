const aiDetectionService = require('../services/aiDetectionService');

const detectText = async (req, res) => {
  try {
    const { text } = req.body;
    
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    const result = await aiDetectionService.analyzeText(text);
    res.json({ result });
  } catch (error) {
    console.error('Text detection error:', error.message);
    res.status(500).json({ 
      error: 'Text detection failed', 
      details: error.message 
    });
  }
};

module.exports = {
  detectText
};
