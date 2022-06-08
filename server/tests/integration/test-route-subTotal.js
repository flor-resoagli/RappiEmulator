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

exports.it_should_return_0_if_empty_cart= function(done){
    let result = subTotal([]);
    assert.ok(result === 0);
    return done();
};

exports.it_should_not_add_an_item_with_negative_price = function(done){
    let item = {id:1, price:5, name: "sandwich", restaurant: "Chino"};
    let item2 = {id:1, price:-10, name: "sandwich", restaurant: "Chino"};
    let result = subTotal([item,item2]);
    assert.ok(result === 5);
    return done();
};