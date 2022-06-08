const supertest = require('supertest'),
    app = require('../../index');

exports.addingToCartItemsShouldReturn200OK = function(done){
    let payload = {cart:[],items:{},qty:2};
    supertest(app)
        .post('/add')
        .send({payload})
        .expect(200)
        .end(done);
};

exports.addingToCartBadValuesShouldReturn422 = function(done){
    let payload = {};
    supertest(app)
        .post('/add')
        .expect(422)
        .end(done);
};