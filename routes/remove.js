const remove = require('../lib/remove');
module.exports = function(req, res, next){
    //get user.id, find cart, renove item to cart.
    return res.json({ result : remove(req.cart, req.item, req.qty) });
};