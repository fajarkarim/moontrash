var postsModel = require('../models/posts')

var createPost = function (req,res) {
  postsModel.create({
    user_id : req.decoded.user_id,
    post : req.body.post
  }, function (err,result) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(result)
    }
  })
}

module.exports = {
  createPost
};
