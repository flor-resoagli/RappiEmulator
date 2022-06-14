const add = require('../lib/add');
module.exports = function(req, res, next){
    //get user.id, find cart, if not, create one, add item to cart.
    return res.json({ result : add(req.body.cart, req.body.item, req.body.qty) });
};