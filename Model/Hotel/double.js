const mongoose = require('mongoose')

var doubleSchema = new mongoose.Schema({
         name:String,
         address:String,
         description: String,
         price: Number,
         image: String
})

const doubleModel =  mongoose.model('doubleModel', doubleSchema, 'doubleroom');

module.exports =  doubleModel;