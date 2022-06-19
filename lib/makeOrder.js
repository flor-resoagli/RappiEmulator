calculateDistancesExternalApi = require("./calculateDistancesExternalApi");
getSubTotal = require('./getSubTotal');

module.exports = function(cart,user,restaurant,boolean){
    if (!restaurant || !cart || !user || !boolean) return false; //if these don't exist, return false;
    if (restaurant?.status !== "ONLINE") return false;
    for (let i = 0; i < cart.length; i++) {
        if (Number(restaurant.id) !== Number(cart[i].restaurantId)) return false; //check if its valid ID;
    }
    if(!calculateDistancesExternalApi(boolean)) return false; //move to external object
    return restaurant.minimumPrice <= getSubTotal(cart);


};

