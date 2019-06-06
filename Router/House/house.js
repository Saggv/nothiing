const express = require('express');
const router = express.Router();
const house = require('../../Controller/House/house');
router.get('/', house.homehouse);

module.exports = router;