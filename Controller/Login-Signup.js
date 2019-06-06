const accountModel = require('../Model/account');


module.exports.singin = function(req, res){
      res.render('./singin', {
             title:'Sign up'
      });
}
module.exports.postsignup = function(req, res){
       if(req.body._id ==""){
          Signupuser(req, res);
       }
       else{
            updateuser(req, res);
       }
         
}

function Signupuser(req, res){
        var accountdata = new accountModel();

        accountdata.name = req.body.name;
        accountdata.gioitinh = req.body.gioitinh;
        accountdata.address = req.body.address;
        accountdata.email = req.body.email;
        accountdata.account = req.body.account;
        accountdata.password =req.body.password;

        accountdata.save((err, docs) =>{
              if(!err){
                     res.redirect('/login');
              }
              else{
                     console.log("error with signup");
              }
        })
}


function updateuser(req, res) {
       accountModel.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
           if (!err) { res.redirect('/user'); }
           else {
            console.log('Error during record update : ' + err);
           }
       });
   }
   


module.exports.lognin = function(req, res){
       res.render('./login',{
              value:""
       });
}

module.exports.postlogin = function(req, res){
       var account1 = req.body.account;
       var password = req.body.password;
       accountModel.findOne({account: account1},(err, user)=>{
               if(!user){
                      res.render('./login', {
                             erroruser:"Chưa có tài khoản !"
                      });
               }
               if(user){
                      if(user.password !==password){
                            res.render('./login', {
                                   erroruser:"Mật khẩu không đúng !",
                                   value:req.body
                            });
                      }
                      else{
                            res.cookie('userId', user._id, {
                                    signed:true
                            })
                            res.redirect('/user');
                      }
                }
                if(err){
                     console.log("errrr");
               }
            
       });
}