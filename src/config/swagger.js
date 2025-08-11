const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'AI Text Detector API',
      version: '1.0.0',
      description: 'A RESTful API for detecting AI-generated text using machine learning models',
      contact: {
        name: 'API Support',
        email: 'support@example.com'
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT'
      }
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server'
      }
    ],
    components: {
      schemas: {
        TextAnalysisRequest: {
          type: 'object',
          required: ['text'],
          properties: {
            text: {
              type: 'string',
              description: 'The text to analyze for AI detection',
              example: 'This is a sample text to analyze.'
            }
          }
        },
        TextAnalysisResponse: {
          type: 'object',
          properties: {
            result: {
              type: 'object',
              properties: {
                isAI: {
                  type: 'boolean',
                  description: 'Whether the text is detected as AI-generated',
                  example: true
                },
                confidence: {
                  type: 'number',
                  description: 'Confidence score of the detection (0-100)',
                  example: 85.5
                },
                details: {
                  type: 'string',
                  description: 'Additional details about the analysis',
                  example: 'Analysis completed successfully'
                }
              }
            }
          }
        },
        Error: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              description: 'Error message',
              example: 'Text is required'
            },
            details: {
              type: 'string',
              description: 'Additional error details',
              example: 'Request validation failed'
            }
          }
        }
      }
    }
  },
  apis: ['./src/routes/*.js'] // Path to the API docs
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpec;
