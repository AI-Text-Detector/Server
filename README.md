# AI Text Detector - Backend Server

A Node.js/Express backend API server for detecting AI-generated text using machine learning models.

## Features

- RESTful API with Express.js
- Swagger API documentation
- Integration with Hugging Face AI models
- CORS enabled for frontend communication
- Environment-based configuration
- Health check endpoint

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Swagger** - API documentation
- **Axios** - HTTP client for external APIs
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <server-repo-url>
cd ai-text-detector-server
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Create .env file
HUGGINGFACE_API_KEY=your_api_key_here
PORT=5000
```

### Running the Server

#### Development Mode
```bash
npm run dev
```

#### Production Mode
```bash
npm start
```

The server will be available at:
- **API**: http://localhost:5000
- **Health Check**: http://localhost:5000/health
- **API Documentation**: http://localhost:5000/api-docs

## API Endpoints

### POST /detect-text
Analyzes text to determine if it's AI-generated or human-written.

**Request:**
```json
{
  "text": "Your text to analyze here"
}
```

**Response:**
```json
{
  "result": {
    "isAI": true,
    "confidence": 85.5,
    "details": "Analysis completed successfully"
  }
}
```

### GET /health
Returns server health status.

**Response:**
```json
{
  "status": "OK",
  "message": "AI Text Detector API is running"
}
```

## Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `HUGGINGFACE_API_KEY` | Hugging Face API key for AI detection | Required |
| `PORT` | Server port | 5000 |

### Hugging Face API Setup

1. Sign up at [Hugging Face](https://huggingface.co/)
2. Get your API key from profile settings
3. Add it to the `.env` file

**Note**: Without an API key, the server runs in demo mode with mock responses.

## API Documentation

Interactive Swagger documentation is available at:
**http://localhost:5000/api-docs**

Features:
- Complete API endpoint documentation
- Interactive testing interface
- Request/response schemas
- Try-it-out functionality

## Development

### Project Structure
```
ai-text-detector-server/
├── server.js          # Main server file
├── .env              # Environment variables
├── package.json      # Dependencies and scripts
└── README.md         # This file
```

### Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests (placeholder)

## Testing

### Using Swagger UI
1. Start the server: `npm run dev`
2. Open http://localhost:5000/api-docs
3. Use the interactive interface to test endpoints

### Using curl
```bash
# Test text detection
curl -X POST http://localhost:5000/detect-text \
  -H "Content-Type: application/json" \
  -d '{"text": "This is a sample text to analyze"}'

# Test health endpoint
curl http://localhost:5000/health
```

## Deployment

### Environment Setup
1. Set production environment variables
2. Ensure proper CORS configuration for your domain
3. Set up proper logging and monitoring

### Docker (Optional)
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
