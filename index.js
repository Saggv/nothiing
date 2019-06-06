const express = require('express');
const app = express();
const port = 5000

const mongoose = require('mongoose');
//this require mongodb
mongoose.connect('mongodb://localhost/hotel', { useNewUrlParser: true });


//this require body-parser
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//this exports router
const homerouter = require('./Router/home');
const hotelrouter = require('./Router/Hotel/hotel');
const houserouter = require('./Router/House/house');
const buyform = require('./Router/buyform');
const Login_Signup = require('./Router/Login-signup');
const Users = require('./Router/users/user');
const detail = require('./Router/detail');

//this to use .pug file
app.set('view engine', 'pug');
app.set('views', './views');

//this to use static file
app.use(express.static('public'));

//this is user cookies
app.use(cookieParser('hfasdlfeoads'))


//this is brow render 
app.use('/',homerouter);
app.use('/hotel', hotelrouter);
app.use('/house', houserouter);
app.use('/buyform', buyform);
app.use('/', Login_Signup);
app.use('/', Users);
app.use('/', detail);





//this i don't know
app.listen(port, () => console.log(`Example app listening on port ${port}!`))