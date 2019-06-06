const accountModel = require('../Model/account');

module.exports.requireLogin = function(req, res, next){
    if(!req.signedCookies.userId){
          res.redirect('/login');
          return;
    }
    console.log(req.signedCookies.userId);
    accountModel.findById(req.signedCookies.userId, (err, user) =>{
                 if(err){
                     console.log(err);
                 }
                 if(!user){
                     res.redirect('/login');
                 }
                 res.locals.user = user
                 next();
    })  
}