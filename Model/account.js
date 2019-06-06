const mongoose = require('mongoose');

var accountSchema = new mongoose.Schema({
          name:{
              type:String
          },
          gioitinh:{
              type:String
          },
          address:{
              type:String
          },
          email:{
              type:String
          },
          account:{
              type:String
          },
          password:{
              type:String
          } 
});

var accountModel = mongoose.model('accountModel', accountSchema, 'accountdata');

module.exports = accountModel;