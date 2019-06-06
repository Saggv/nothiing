const express = require('express');
const router = express.Router();
const sigleroom = require('../Model/hotel');
const doubleroom = require('../Model/Hotel/double');

router.get('/detail', (req, res) =>{
          res.render('./detail')
})

router.get('/detail/:id',async function(req, res){
       
     let silge = await sigleroom.findOne({_id:req.params.id});        
     res.render('./detail', {
          sigleroom:silge,
     })

    
});
router.get('/detail/double/:id',async function(req, res){
       
     let double = await doubleroom.findOne({_id: req.params.id});
          console.log(double);
     res.render('./Hotel/detaildoubel', {
              doubleroom:double
     })
})

module.exports = router;