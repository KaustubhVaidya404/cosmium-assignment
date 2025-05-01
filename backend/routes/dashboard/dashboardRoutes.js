const router = require('express').Router();
const dashboardController = require('../../controllers/dashboard/dashboardController');

router.get('/dashboard', (req, res) => {
  return dashboardController(req, res);
});

module.exports = router;
