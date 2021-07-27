const router = require('express').Router();
const sendHelloWorld = require('../controllers/sendHelloWorld');

router.get('/', sendHelloWorld);

module.exports = router;
