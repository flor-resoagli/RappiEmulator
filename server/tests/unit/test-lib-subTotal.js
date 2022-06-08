const assert = require('assert'),
    subTotal = require('../../lib/getSubTotal');

exports.it_should_add_an_item = function(done){
    let item = {id:1, price:5, name: "sandwich", restaurant: "Chino"};
    let result = subTotal([item]);
    assert.ok(result === 5);
    return done();
};

exports.it_should_subTotal_multiple_Items = function(done){
    let item = {id:1, price:5, name: "sandwich", restaurant: "Chino"};
    let result = subTotal([item,item]);
    assert.ok(result === 10);
    return done();
};

exports.it_should_return_0= function(done){
    let result = subTotal([]);
    assert.ok(result === 0);
    return done();
};