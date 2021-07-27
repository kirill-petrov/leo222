const router = require('express').Router();
const renderRegisterForm = require('../controllers/users/renderRegisterForm');
const createUser = require('../controllers/users/createUser');

router.route('/')
  .get(renderRegisterForm)
  .post(createUser);

module.exports = router;
