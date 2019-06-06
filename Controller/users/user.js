const accountModel = require('../../Model/account');

module.exports.user = function(req, res){
      accountModel.find((err, docs) =>{
             if(!err){
                    
              res.render('./user',{
                       users:docs
              });
             }
             else{
                    console.log("Error while show users : "+err);
             }
      }) 
}
