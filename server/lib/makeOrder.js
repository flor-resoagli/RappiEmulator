    calculateDistance = require("./calculateDistances");
    getSubTotal = require('./getSubTotal');

module.exports = function(cart,user,restaurant){
    if (!restaurant || !cart || !user) return false; //if these don't exist, return false;
    if (restaurant?.status !== "ONLINE") return false;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].restaurantId !== restaurant.id) return false; //check if its valid ID;
    }
    if(calculateDistance(user.location[0],user.location[1],restaurant) >= 5) return false; //move to external object
    return restaurant.minimumPrice <= getSubTotal(cart);


};

