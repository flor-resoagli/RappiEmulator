calculateDistance = require('./calculateDistances')

module.exports = function(latitude,longitude,restaurantMap){
    //Code haversine distance within latitude, get a 5km range of a map...
    if(!latitude || !longitude) return []
    if(!restaurantMap) return []
    let nearRestArray = [];
    for (let i = 0; i < restaurantMap.length; i++) {
        if(calculateDistance(latitude,longitude,restaurantMap[i]) <= 5) //less than 5km away
            nearRestArray.push(restaurantMap[i]);
    }
    return nearRestArray;

};