const axios = require('axios');

class AIDetectionService {
  constructor() {
    this.apiKey = process.env.HUGGINGFACE_API_KEY;
  }

  /**
   * Analyze text to determine if it's AI-generated or human-written
   * @param {string} text - The text to analyze
   * @returns {Promise<Object>} Analysis result
   */
  async analyzeText(text) {
    if (!text || text.trim().length === 0) {
      throw new Error('Text is required');
    }

    // Check if API key is configured
    if (!this.apiKey || this.apiKey === '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') {
      return this.generateMockResult();
    }

    try {
      const response = await axios.post('https://api-inference.huggingface.co/models/bert-base-uncased', {
        inputs: text,
      }, {
        headers: { Authorization: `Bearer ${this.apiKey}` }
      });
      
      return this.formatResponse(response.data);
    } catch (error) {
      console.error('AI Detection API Error:', error.message);
      throw new Error(`Text detection failed: ${error.message}`);
    }
  }

  /**
   * Generate mock result for demo purposes
   * @returns {Object} Mock analysis result
   */
  generateMockResult() {
    return {
      isAI: Math.random() > 0.5,
      confidence: Math.floor(Math.random() * 40) + 60,
      details: 'Demo mode - Please configure your Hugging Face API key for real analysis'
    };
  }

  /**
   * Format the API response
   * @param {Object} data - Raw API response
   * @returns {Object} Formatted result
   */
  formatResponse(data) {
    // This is a placeholder - adjust based on actual Hugging Face API response format
    return {
      isAI: data.isAI || false,
      confidence: data.confidence || 0,
      details: data.details || 'Analysis completed successfully'
    };
  }

  /**
   * Get service health status
   * @returns {Object} Health status
   */
  getHealthStatus() {
    return {
      status: 'OK',
      message: 'AI Text Detector API is running',
      timestamp: new Date().toISOString(),
      apiKeyConfigured: !!(this.apiKey && this.apiKey !== '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')
    };
  }
}

module.exports = new AIDetectionService();
