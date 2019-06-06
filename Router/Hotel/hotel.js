const express = require('express');
const router = express.Router();
const hotel = require('../../Controller/Hotel/homehotel');
const room = require('../../Controller/Hotel/rom');
const searchroom = require('../../Controller/Hotel/searchroom');

router.get('/', hotel.homehotel);

router.get('/room', room.room);

router.get('/search', searchroom.search);

router.get('/searchall', searchroom.searchall)

module.exports = router