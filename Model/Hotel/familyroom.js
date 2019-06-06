const mongoose = require('mongoose');

var familySchema = new mongoose.Schema({
    name:String,
    address:String,
    description: String,
    price: Number,
    image: String
})

const familyModel =  mongoose.model('familyModel', familySchema, 'familyroom');

module.exports =  familyModel;