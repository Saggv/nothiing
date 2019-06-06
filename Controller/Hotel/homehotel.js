const hotel = require('../../Model/hotel');
const doubleModel = require('../../Model/Hotel/double');
const familyModel = require('../../Model/Hotel/familyroom');

module.exports.homehotel =async function(req, res){
   let page = parseInt(req.query.page) ||1;
   let perpage = 6;

   let start = (page-1)* perpage;
   let end = page* perpage;

    let sigleroom = await hotel.find();

    let doubleroom = await doubleModel.find();

    let familyroom = await familyModel.find();

    res.render('./Hotel/hotel',{
        products: sigleroom.slice(start, end),
        doubleroom: doubleroom,
        familyroom: familyroom
 });      
}