const getSubTotal = require('../lib/getSubTotal');
module.exports = function(req, res, next){
    return res.json({ result : getSubTotal(req.cart) });
};