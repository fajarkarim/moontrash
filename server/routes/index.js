var express = require('express');
var router = express.Router();
const watson = require('watson-developer-cloud');
var fs = require('fs');
const request = require('request');


var visual_recognition = watson.visual_recognition({
api_key: '442c744583689ede30ced37c175c36103286bf92',
version: 'v3',
version_date: '2016-05-20'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/analyze-picture', function(req, res) {

  var params = {
  images_file: fs.createReadStream('./public/Twice Signal.jpg')
  }
  console.log('ini params vvvvvvvvvvvvvvvvvvvvvvvvvvvvv');
  console.log(params.images_file);
  visual_recognition.classify(params, function(err, response) {
  if (err)
    console.log(err);
  else
    res.send(JSON.parse(JSON.stringify(response.images[0].classifiers[0].classes, null, 1)));
  })
})

module.exports = router;
[
  {"classifiers":[
    {
      "classes":[
        {
          "class":"signorina (woman)",
          "score":0.64,
          "type_hierarchy":"/person/female/signorina (woman)"
        },{
          "class":"woman"
          ,"score":0.64
        },{
          "class":"female","score":0.641
        },{
          "class":"person","score":0.859
        },{
          "class":"schoolmate","score":0.549,"type_hierarchy":"/person/schoolmate"
        },{
          "class":"steward","score":0.507,"type_hierarchy":"/person/steward"
        },{
          "class":"people","score":0.614
        },{
          "class":"woman soldier","score":0.503,"type_hierarchy":"/person/serviceman/woman soldier"},{"class":"serviceman","score":0.503},{"class":"airwoman","score":0.5,"type_hierarchy":"/person/aviator/airwoman"},{"class":"aviator","score":0.5},{"class":"blue color","score":0.556},{"class":"alizarine red color","score":0.5}],"classifier_id":"default","name":"default"}],"image":"Twice Signal.jpg"}]
