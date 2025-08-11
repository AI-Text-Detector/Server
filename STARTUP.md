# AI Text Detector Server - Quick Start

## 🚀 Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Server
```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

### 3. Access Points
- **Server**: http://localhost:5000
- **Health Check**: http://localhost:5000/health
- **API Documentation**: http://localhost:5000/api-docs
- **Text Analysis**: http://localhost:5000/api/detect-text

## 📁 Project Structure

```
ai-text-detector-server/
├── src/
│   ├── config/          # Configuration files
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Custom middleware
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── utils/           # Utility functions
│   ├── app.js           # Express app setup
│   └── server.js        # Server entry point
├── package.json         # Dependencies
└── README.md           # Full documentation
```

## 🔧 Configuration

### Environment Variables (Optional)
Create a `.env` file in the root directory:
```env
HUGGINGFACE_API_KEY=your_api_key_here
PORT=5000
NODE_ENV=development
```

**Note**: Without an API key, the server runs in demo mode.

## 🧪 Testing

### Test with Swagger UI
1. Start server: `npm run dev`
2. Open: http://localhost:5000/api-docs
3. Use interactive interface

### Test with curl
```bash
# Health check
curl http://localhost:5000/health

# Text analysis
curl -X POST http://localhost:5000/api/detect-text \
  -H "Content-Type: application/json" \
  -d '{"text": "Hello world"}'
```

## 📚 Next Steps

- Read the full [README.md](README.md) for detailed documentation
- Configure your Hugging Face API key for real AI detection
- Explore the modular architecture in the `src/` folder
- Check out the API documentation at `/api-docs`

## 🆘 Troubleshooting

- **Port already in use**: Change PORT in .env file
- **Module not found**: Run `npm install`
- **API errors**: Check Hugging Face API key configuration
