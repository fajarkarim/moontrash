var express = require('express');
var router = express.Router();
var userControllers = require('../controllers/userControllers')

router.post('/', userControllers.signIn)

module.exports = router;
