const accountModel = require('../../Model/account');
const express = require('express');
const Users = require('../../Controller/users/user');
const middlewareLogin = require('../../Middleware/middleware_login');

const router = express.Router();

router.get('/user',middlewareLogin.requireLogin, Users.user);

router.get('/user/edit/:id', (req, res) =>{
        accountModel.findById(req.params.id, (err, user) =>{
             if(!err){
                 res.render('./singin', {
                     title:" Update user account",
                     users:user
                 })
             }
        } )
})
router.get('/user/delete/:id', (req, res) =>{
     accountModel.findByIdAndRemove(req.params.id, (err, user) =>{
           if(!err){
               res.redirect('/user');
           }
     })
})


module.exports = router;