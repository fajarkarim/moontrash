var express = require('express');
var router = express.Router();
const watson = require('watson-developer-cloud');
var fs = require('fs');
const request = require('request');
const http = require('http');


var visual_recognition = watson.visual_recognition({
api_key: '442c744583689ede30ced37c175c36103286bf92',
version: 'v3',
version_date: '2016-05-20'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/analyze-picture', function(req, res) {
  var params = {
    url: req.body.img
  }
  console.log('ini params vvvvvvvvvvvvvvvvvvvvvvvvvvvvv');
  // res.send(params.images_file);
  visual_recognition.classify(params, function(err, response) {
  if (err) {
    console.log(err);
  } else
    // res.send(JSON.parse(JSON.stringify(response.images[0].classifiers[0].classes, null, 1)));
    res.send(JSON.stringify(response, null, 1));
  })
})

module.exports = router;
