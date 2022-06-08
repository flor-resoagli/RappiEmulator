const assert = require('assert');
    getNearRestaurants = require('../../lib/getNearRestaurants');

let restaurantMap = [{
    id: 25,
    name: 'MIZ Japanese Restaurant',
    address: '17 Kampong Bahru Rd, Singapore 169347',
    location: [16.6180375, 120.314654452]},{
    id: 25,
    name: 'MIZ Japanese Restaurant',
    address: '17 Kampong Bahru Rd, Singapore 169347',
    location: [16.6180375, 120.314654454]
}]

exports.it_should_return_empty_array_with_no_restaurants = function(done){
    let result = getNearRestaurants(1,2,[]);
    assert.ok(result.length === 0);
    return done();
};

exports.it_should_return_empty_array_with_restaurants_far_away = function(done){
    let result = getNearRestaurants(1,2,restaurantMap);
    assert.ok(result.length === 0);
    return done();
};

exports.it_should_return_array_with_restaurants_near = function(done){
    let result = getNearRestaurants(16.6180375, 120.314654453,restaurantMap);
    assert.ok(result.length === 2);
    return done();
};
//check that the user has a latitude and longitude

exports.it_should_return_empty_array_with_null_User_Loc = function(done){
    let result = getNearRestaurants(null, null,restaurantMap);
    assert.ok(result.length === 0);
    return done();
};

