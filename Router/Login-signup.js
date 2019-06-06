const express = require('express');
const Signup = require('../Controller/Login-Signup');

const router = express.Router();

router.get('/signup',Signup.singin);

router.post('/signup', Signup.postsignup);

router.get('/login', Signup.lognin);
router.post('/login', Signup.postlogin);

module.exports = router;