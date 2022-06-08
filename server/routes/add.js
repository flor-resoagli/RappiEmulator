const add = require('../lib/add');
module.exports = function(req, res, next){
    return res.json({ result : add(req.cart, req.item, res.qty) });
};