var express = require('express');
var router = express.Router();
var postControllers = require('../controllers/postControllers')

router.post('/', postControllers.createPost)

module.exports = router;
