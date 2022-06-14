module.exports = function(cart, item, qty){
    let resultingCart = cart
    let times = qty;
    if(qty >= 1) {
        for (let i = 0; i < resultingCart.length; i++) {
            if (resultingCart[i].id === item.id) {
                resultingCart.splice(i, 1);
                i--; // Prevent skipping an item
                times--;
                if (times <= 0) break;
            }
        }
    }
    return resultingCart;
};