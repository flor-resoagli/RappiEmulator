const assert = require('assert');
    makeOrder = require('../../lib/makeOrder');

//check that the restaurant has the items on the cart.
//check that the restaurant is 'live'
//check that the userDistance is >= 5000m
//check that the cart has validItems
//calculateSubTotal.

exports.orderShouldReturnFalseIfAttributesAreNull = function(done){
    let restaurant = {id: 25,
        name: 'MIZ Japanese Restaurant',
        address: '17 Kampong Bahru Rd, Singapore 169347',
        location: [16.618037, 120.3146543],
        status: "ONLINE",
        minimumPrice: 5,
        foodItems:[{id: 1,
            name: 'Spicy Teriyaki',
            price: 19.25,
            image: 'spicy-teriyaki.jpg',},
            {id: 2,
            name: 'Honey Garlic Chicken',
            price: 5.5,
            image: 'honey-garlic-chicken.jpg',}]
    };
    let result = makeOrder(null, null,restaurant);
    assert.ok(!result);
    let result2 = makeOrder(null, {},restaurant);
    assert.ok(!result2);
    let result3 = makeOrder([], {},null);
    assert.ok(!result3);
    return done();
};

exports.orderShouldReturnFalseIfRestaurantIsNotLive = function(done){
    let restaurant = {
        id: 25,
        name: 'MIZ Japanese Restaurant',
        address: '17 Kampong Bahru Rd, Singapore 169347',
        location: [16.618037, 120.3146543],
        status: "OFFLINE",
        minimumPrice: 5,
        foodItems:[{id: 1,
            name: 'Spicy Teriyaki',
            price: 19.25,
            image: 'spicy-teriyaki.jpg',},
            {id: 2,
                name: 'Honey Garlic Chicken',
                price: 5.5,
                image: 'honey-garlic-chicken.jpg',}]
    };
    let user = {userId:123, location: [16.618037, 120.3146543]};
    let cart = [{id:1, price:5, name: "sandwich", restaurant: "MIZ Japanese Restaurant", restaurantId: 25}]
    let result = makeOrder(cart, user,restaurant);
    assert.ok(!result);
    return done();
};

exports.orderShouldReturnTrueIfRestaurantIsLive = function(done){
    let restaurant = {
        id: 25,
        name: 'MIZ Japanese Restaurant',
        address: '17 Kampong Bahru Rd, Singapore 169347',
        location: [16.618037, 120.3146543],
        status: "ONLINE",
        minimumPrice: 5,
        foodItems:[{id: 1,
            name: 'Spicy Teriyaki',
            price: 19.25,
            image: 'spicy-teriyaki.jpg',},
            {id: 2,
                name: 'Honey Garlic Chicken',
                price: 5.5,
                image: 'honey-garlic-chicken.jpg',}]
    };
    let user = {userId:123, location: [16.618037, 120.3146543]};
    let cart = [{id: 1,
        name: 'Spicy Teriyaki',
        price: 19.25,
        restaurantId:25}]
    let result = makeOrder(cart, user,restaurant);
    assert.ok(result);
    return done();
};

exports.orderShouldReturnFalseIfRestaurantIsFarAway = function(done){
    let restaurant = {
        id: 25,
        name: 'MIZ Japanese Restaurant',
        address: '17 Kampong Bahru Rd, Singapore 169347',
        location: [16.618037, 120.3146543],
        status: "ONLINE",
        minimumPrice: 5,
        foodItems:[{id: 1,
            name: 'Spicy Teriyaki',
            price: 19.25,
            image: 'spicy-teriyaki.jpg',},
            {id: 2,
                name: 'Honey Garlic Chicken',
                price: 5.5,
                image: 'honey-garlic-chicken.jpg',}]
    };
    let user = {userId:123, location: [1.2773164, 103.8384773]};
    let cart = [{id:1, price:5, name: "sandwich", restaurant: "MIZ Japanese Restaurant", restaurantId: 25}]
    let result = makeOrder(cart, user,restaurant);
    assert.ok(!result);
    return done();
};

exports.orderShouldReturnFalseIfRestarauntPriceIsHigherThanItemCount = function(done){
    let restaurant = {
        id: 25,
        name: 'MIZ Japanese Restaurant',
        address: '17 Kampong Bahru Rd, Singapore 169347',
        location: [16.618037, 120.3146543],
        status: "ONLINE",
        minimumPrice: 10,
        foodItems:[{id: 1,
            name: 'Spicy Teriyaki',
            price: 19.25,
            image: 'spicy-teriyaki.jpg',},
            {id: 2,
                name: 'Honey Garlic Chicken',
                price: 5.5,
                image: 'honey-garlic-chicken.jpg',}]
    };
    let user = {userId:123, location: [1.2773164, 103.8384773]};
    let cart = [{id:1, price:5, name: "sandwich", restaurant: "MIZ Japanese Restaurant", restaurantId: 25}]
    let result = makeOrder(cart, user,restaurant);
    assert.ok(!result);
    return done();
};
