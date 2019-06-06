const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
      name: String,
      price: Number,
      address: String,
      image: String,
      typeof: String
});

const hotel = mongoose.model('hotel', hotelSchema, 'singleroom');

module.exports = hotel;