const hotel = require('../../Model/hotel')

module.exports.room = function(req, res){
       let page = parseInt(req.query.page) ||1;
       let perpage = 8;
       
       let start = (page-1)*perpage;
       let end = perpage*page;
       hotel.find().then(function(rooms){
              res.render('./Hotel/room', {
                      rooms: rooms.slice(start, end)
              });
       });
};

