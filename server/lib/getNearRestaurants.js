module.exports = function(latitude,longitude,restaurantMap){
    //Code hessian distance within latitude, get a 5km range of a map...
    //hay que buscar algun Dataset...
    if(!latitude || !longitude) return []
    if(!restaurantMap) return []
    let nearRestArray = [];
    for (let i = 0; i < restaurantMap.length; i++) {
        if(calculateDistance(latitude,longitude,restaurantMap[i]) <= 5) //less than 5km away
            nearRestArray.push(restaurantMap[i]);
    }
    return nearRestArray;

};

function calculateDistance(latitude,longitude,restaurant) {
    return haversineDistance([longitude, latitude], [restaurant.location[1], restaurant.location[0]])
}

function haversineDistance(coords1, coords2) {
    function toRad(x) {
        return x * Math.PI / 180;
    }

    const lon1 = coords1[0];
    const lat1 = coords1[1];

    const lon2 = coords2[0];
    const lat2 = coords2[1];

    const R = 6371; // km

    const x1 = lat2 - lat1;
    const dLat = toRad(x1);
    const x2 = lon2 - lon1;
    const dLon = toRad(x2)
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}