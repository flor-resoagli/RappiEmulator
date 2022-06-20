const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const {MongoClient} = require("mongodb");

require('dotenv').config();
add = require('./lib/add')
remove = require('./lib/remove')
makeOrder = require('./lib/makeOrder')
getNearRestaurants = require('./lib/getNearRestaurants')

//ATLAS_URI=mongodb+srv://user:user@localhost/myFirstDatabase?retryWrites=true&w=majority
const connectionString = process.env.ATLAS_URI || process.env.ME_CONFIG_MONGODB_URL //if its cloud or localhost.
MongoClient.connect(connectionString)
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('rappiemulator')
        const restaurantsCollection = db.collection('restaurants')
        const users = db.collection('users')

        //users.findOne({id:1}).then( res => console.log("res: ",res)).catch(e => console.log("error: ",e))


        // ========================
        // Middlewares
        // ========================
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
        app.use(cors());

        // ========================
        // Routes
        // ========================
        app.get('/cart', (req, res) => {
            //return cart with param ?userId=1
            //users.findOne({id: req.params.userId})
            users.findOne({"name": "User 1"})
                .then(user => {
                    res.json(user)
                })
                .catch(/* ... */)
        })
        app.get('/restaurants', (req, res) => {
            restaurantsCollection.find().toArray().then(restaurants => {
                res.status(200).send({restaurants})
            })
        })
        app.get('/restaurantsNear', (req, res) => {
            restaurantsCollection.find().toArray().then(restaurants => {
                users.findOne({"name": "User 1"}).then(user => {
                    let near = getNearRestaurants(user.location[0], user.location[1], restaurants)
                    res.status(200).send({near})
                })
            }).catch(err => res.status(500).send({"Something went wrong, ": err}))
        })
        app.put('/cart', (req, res) => {
            users.findOne({"name": "User 1"}).then(user => {
                    users.findOneAndUpdate(
                        {"name": "User 1"},
                        {
                            '$set': {cart: add(user?.cart, req.body?.item, req.body?.qty)}
                        },
                        {new: false, upsert: false, remove: {}, fields: {}},
                        (err, doc) => {
                            if (err) {
                                res.status(500).send({"Something went wrong, ": err})
                            }
                            res.status(200).send({"Successfully Added": req.body.item})
                        }
                    )

                }
            ).catch(e => console.log("error: ", e))
        })

        app.delete('/cart', (req, res) => {
            users.findOne({"name": "User 1"}).then(user => {
                    users.findOneAndUpdate(
                        {"name": "User 1"},
                        {
                            '$set': {cart: remove(user?.cart, req.body?.item, req.body?.qty)}
                        },
                        {new: false, upsert: false, remove: {}, fields: {}},
                        (err, doc) => {
                            if (err) {
                                res.status(500).send({"Something went wrong, ": err})
                            }
                            res.status(200).send({"Successfully Removed": req.body.item})
                        }
                    )

                }
            ).catch(e => console.log("error: ", e))
        })

        app.post('/makeOrder', (req, res) => {
            //makeOrder(body: restaurantName)
            users.findOne({"name": "User 1"}).then((user) => {
                restaurantsCollection.findOne({"name": req.body.restaurantName}).then(restaurant => {
                    if (makeOrder(user?.cart, user,restaurant)) {
                        const orderItem = {cart: user.cart, location: user.location, status: "deployed"}
                        restaurantsCollection.findOneAndUpdate({"name": req.body.restaurantName},
                            {
                                '$push': {orders: orderItem}
                            },
                            {new: false, upsert: false, remove: {}, fields: {}},
                            (err, doc) => {
                                if (err) {
                                    res.status(500).send({"Something went wrong, ": err})
                                }
                                users.findOneAndUpdate(
                                    {"name": "User 1"},
                                    {
                                        '$set': {cart: []}
                                    },
                                    {new: false, upsert: false, remove: {}, fields: {}},
                                    (err, doc) => {
                                        if (err) {
                                            res.status(500).send({"Something went wrong, ": err})
                                        }
                                        res.status(200).send({"Successfully made Order and cleared Cart": orderItem})
                                    }
                                )
                            }
                        )
                    } else {
                        res.status(500).send({text:"Order doesn't have a correct input",
                                cart: user?.cart, user:user, restaurant:restaurant})
                    }
                }).catch((e)=> {
                    res.status(500).send("Restaurant not found")
                })

                }).catch((e) => res.status(500).send("User not found")
            )
        })
        // ========================
        // Listen
        // ========================
        const PORT = 5000;
        app.listen(PORT, err => {
            if (err) {
                console.error(err);
            } else {
                console.log(`Running on ports ${PORT}`);
            }
        });
    })
    .catch(console.error)

module.exports = app;