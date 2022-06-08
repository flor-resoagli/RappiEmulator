module.exports = function(cart, item, qty){
    let arr = cart //assign
    if (!cart) arr = []; //if it doesnt exist create an empty Array
    if(!matcher(item)) return arr; //If format is good, then keep going
    if (!item) return arr; //If Item doesnt exists, return cart.
    if (qty >= 1) {
        for (let i = 0; i < qty; i++) arr.push(item);
    }
    return arr;
};

function matcher(item) {
    let matchers = ["id", "price", "name", "restaurant"];
    return matchers.every(function (id) {
        return Object.keys(item).indexOf(id) !== -1;
    })
}