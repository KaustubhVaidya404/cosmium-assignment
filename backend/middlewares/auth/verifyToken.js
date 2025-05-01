const jwt = require('jsonwebtoken');
const logger = require('../../utils/logger');

// eslint-disable-next-line consistent-return
function verifyToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(403).send({ message: 'No token provided!' });

  try {
    const tokenValue = token.startsWith('Bearer ') ? token.slice(7) : token;
    const verifiedToken = jwt.verify(tokenValue, process.env.JWT_SECRET);
    req.user = verifiedToken;
    next();
  } catch (error) {
    logger.error('Unauthorized access attempt detected');
    return res.status(401).send({ message: 'Unauthorized!' });
  }
}

module.exports = verifyToken;
