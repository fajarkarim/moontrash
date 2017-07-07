var usersModel = require('../models/users')

var signIn = function (req,res) {
  usersModel.findAndModify({
    query : {
      fullname : req.body.fullname
    },
    update : {
      $setOnInsert: {
        fullname : req.body.fullname
      }
    },
    new : true,
    upsert : true,
    function (err,result) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(result)
      }
    }
  })
}

module.exports = {
  signIn
};
