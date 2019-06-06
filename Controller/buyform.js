
const Buyformmodel = require('../Model/buyform');


module.exports.buyform = function(req,res){
           res.render('./buyform');
}

module.exports.postbuyform = function(req, res){
          var buyform = new Buyformmodel();
            buyform.name = req.body.name;
            buyform.phone = req.body.phone;
            buyform.email = req.body.email;
            buyform.thanhtoan = req.body.thanhtoan;
            buyform.sotaikhoan = req.body.sotaikhoan;
            buyform.save((err, docs) =>{
                    if(!err){
                        res.redirect('/');
                    }
                    else{
                        console.log("Error while add buyform :"+ err);
                    }
            })

}