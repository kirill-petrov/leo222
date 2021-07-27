const router = require('express').Router();
const renderLoginForm = require('../controllers/users/renderLoginForm');
const authenticateUser = require('../controllers/users/authenticateUser');

router.route('/')
  .get(renderLoginForm)
  .post(authenticateUser);

module.exports = router;
