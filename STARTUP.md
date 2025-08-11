# Server Startup Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment
Create a `.env` file in the root directory:
```env
HUGGINGFACE_API_KEY=your_api_key_here
PORT=5000
```

### 3. Start the Server

#### Development Mode (with auto-restart)
```bash
npm run dev
```

#### Production Mode
```bash
npm start
```

### 4. Verify Server is Running
- **API**: http://localhost:5000
- **Health Check**: http://localhost:5000/health
- **API Documentation**: http://localhost:5000/api-docs

## API Testing

### Using Swagger UI
1. Open http://localhost:5000/api-docs
2. Click on any endpoint
3. Click "Try it out"
4. Enter test data and click "Execute"

### Using curl
```bash
# Test health endpoint
curl http://localhost:5000/health

# Test text detection
curl -X POST http://localhost:5000/detect-text \
  -H "Content-Type: application/json" \
  -d '{"text": "This is a sample text to analyze"}'
```

## Troubleshooting

### Port Already in Use
Change the PORT in your `.env` file:
```env
PORT=5001
```

### Missing Dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

### API Key Issues
- Get a Hugging Face API key from https://huggingface.co/settings/tokens
- Add it to your `.env` file
- Without an API key, the server runs in demo mode
