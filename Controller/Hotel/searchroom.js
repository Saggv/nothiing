//this is search rooms
const hotel = require('../../Model/hotel')

const doubleModel = require('../../Model/Hotel/double');
const familyModel = require('../../Model/Hotel/familyroom');

module.exports.search = function(req, res){
        let nameroom = req.query.nameroom;     
       hotel.find().then(function(rooms){
              let listroom = rooms.filter( ron=>{
                        return ron.name.toLowerCase().indexOf(nameroom.toLowerCase()) !==-1;
              })
              console.log(listroom);
              res.render('./Hotel/room', {
                     rooms: listroom
                   });
       });
     
};

module.exports.searchall = async function(req, res){
       let namesearch = req.query.namesearch;
       let sigleroom =  await hotel.find();
      
       let room = sigleroom.filter( function( rooms){
                return rooms.name.toLowerCase().indexOf(namesearch.toLowerCase()) !==-1
       })

       let doubleroom = await doubleModel.find();

       let double = doubleroom.filter( function(room){
                  return room.name.toLowerCase().indexOf(namesearch.toLowerCase()) !==-1;
       })

       let familyroom = await familyModel.find();

       let family = familyroom.filter(function(room){
                 return room.name.toLowerCase().indexOf(namesearch.toLowerCase()) !==-1;
       })

       console.log(double);
       res.render('./Hotel/hotel', {
              products: room,
               doubleroom: double,
               familyroom: family
       })

}