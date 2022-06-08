const assert = require('assert'),
    add = require('../../lib/add');

exports.it_should_add_an_item = function(done){
    let item = {id:1, price:5, name: "sandwich", restaurant: "Chino"};
    let result = add([],item,1);
    assert.ok(result.includes(item));
    return done();
};

exports.it_should_add_multiple_items = function(done){
    let item = {id:1, price:5, name: "sandwich", restaurant: "Chino"};
    let result = add([],item,2);
    assert.ok(result.length === 2);
    return done();
};

exports.it_should_not_add_item = function(done){
    let item = {id:1, price:5, name: "sandwich", restaurant: "Chino"};
    let result = add([],item,0);
    assert.ok(result.length === 0);
    return done();
};