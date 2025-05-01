const router = require('express').Router();
const { register, login } = require('../../controllers/auth/authController');

router.post('/register', async (req, res) => {
  return register(req, res);
});

router.post('/login', async (req, res) => {
  return login(req, res);
});

module.exports = router;
