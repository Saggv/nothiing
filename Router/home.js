const express = require('express');
const router = express.Router();
const Controller = require('../Controller/home');

router.get('/', Controller.home);

module.exports = router;