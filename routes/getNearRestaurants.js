const getNearRestaurants = require('../lib/getNearRestaurants');
module.exports = function(req, res, next){

    //get mongo-seed restaurant map,
    //check user lat and long.
    //get response.
    return res.json({ result : getNearRestaurants(req.latitude,req.longitude,req.restaurantMap) });
};