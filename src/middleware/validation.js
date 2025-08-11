/**
 * Validate text input for AI detection
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const validateTextInput = (req, res, next) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  if (typeof text !== 'string') {
    return res.status(400).json({ error: 'Text must be a string' });
  }

  if (text.trim().length === 0) {
    return res.status(400).json({ error: 'Text cannot be empty' });
  }

  if (text.length > 10000) {
    return res.status(400).json({ error: 'Text is too long. Maximum 10,000 characters allowed.' });
  }

  next();
};

module.exports = {
  validateTextInput
};
