const mongoose = require('mongoose');

var BuyformSchema = new mongoose.Schema({
        name:{
             type:String
        },
        phone:{
             type:String
        },
        email: {
             type:String
        },
        thanhtoan:{
            type:String
        },
        sotaikhoan:{
            type:String
        }
});

var Buyformmodel = mongoose.model('Buyformmodel', BuyformSchema, 'buyform');

module.exports = Buyformmodel;