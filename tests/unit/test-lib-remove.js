const assert = require('assert'),
    remove = require('../../lib/remove');

exports.it_should_not_remove_an_item = function(done){
    let item = {id:1, price:5, name: "sandwich", restaurant: "Chino"};
    let result = remove([{id:1, price:5, name: "sandwich", restaurant: "Chino"}],item,0);
    assert.ok(result.length === 1);
    return done();
};

exports.it_remove_an_item = function(done){
    let item = {id:1, price:5, name: "sandwich", restaurant: "Chino"};
    let result = remove([{id:1, price:5, name: "sandwich", restaurant: "Chino"}],item,1);
    assert.ok(result.length === 0);
    return done();
};

exports.it_should_remove_multiple_items = function(done){
    let item = {id:1, price:5, name: "sandwich", restaurant: "Chino"};
    let result = remove([{id:1, price:5, name: "sandwich", restaurant: "Chino"},{id:1, price:5, name: "sandwich", restaurant: "Chino"}],item,2);
    assert.ok(result.length === 0);
    return done();
};

exports.it_should_not_remove_item_if_not_found = function(done){
    let item = {id:1, price:5, name: "sandwich", restaurant: "Chino"};
    let result = remove([{id:2, price:10, name: "burger", restaurant: "Asian"}],item,1);
    assert.ok(result.length === 1);
    return done();
};