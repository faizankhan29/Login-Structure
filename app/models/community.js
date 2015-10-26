var mongoose = require('mongoose');

module.exports = mongoose.model('Community',{
    com_name:String,
  category:String,
  post:String
},'community');
