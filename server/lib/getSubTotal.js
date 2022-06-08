module.exports = function(cart){
    if (!cart) return [];
    let total = 0;
    for (let i = 0; i < cart.length; i++){
        if(cart[i].price >= 0) total += cart[i].price //price no tendria que ser negativo.
    }
    return total;
};