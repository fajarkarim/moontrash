var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  fullname : {
    type : String,
    required : true
  }
},{
  timestamps : true
})

var usersModel = mongoose.model('Users', userSchema)

module.exports = usersModel;
