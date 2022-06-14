const makeOrder = require('../lib/makeOrder');
module.exports = function(req, res, next){
    //get user.id, find cart, makeOrder, check result, print result, update db with result.
    return res.json({ result : makeOrder(req.cart, req.user, req.restaurant) });
};