const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const {foods} = require('./data/foods.js');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/images', express.static('images'));

app.get('/foods/:query?', (req, res) => {
  const foods_r = foods();

  if (req.query.query !== undefined) {
    const query = req.query.query.toLowerCase();
    return res.send({
      foods: foods_r.filter(
        itm =>
          itm.name.toLowerCase().includes(query) ||
          itm.restaurant.toLowerCase().includes(query),
      ),
    });
  }

  return res.send({
    foods: foods_r,
  });
});

app.get('/add', require('./routes/add'));
app.get('/subtract', require('./routes/subtract'));

const PORT = 5000;
app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Running on ports ${PORT}`);
  }
});