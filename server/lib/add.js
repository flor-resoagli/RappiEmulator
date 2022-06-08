module.exports = function(cart, item, qty){
    if (!cart) return [];
    if (!item || !qty) return cart;
    let arr = [...cart]
    for (let i = 0; i < qty; i++) arr.push(item);
    return arr;
};