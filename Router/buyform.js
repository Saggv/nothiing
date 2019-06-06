const express = require('express');
const router = express.Router();

const buyform = require('../Controller/buyform')

router.get('/',buyform.buyform );

router.post('/', buyform.postbuyform);


module.exports = router;