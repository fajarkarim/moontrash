var mongoose = require('mongoose')

var postSchema = new mongoose.Schema({
  user_id : {
    type : mongoose.Schema.ObjectId,
    ref : 'Users'
  },
  post :{
    type : String
  }
},{
  timestamps : true
})

var postsModel = mongoose.model('Posts', postSchema)

module.exports = postsModel;
