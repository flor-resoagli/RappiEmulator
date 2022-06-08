const remove = require('../lib/remove');
module.exports = function(req, res, next){
    return res.json({ result : remove(req.cart, req.item, req.qty) });
};