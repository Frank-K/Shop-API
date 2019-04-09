require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ProductController = require('./controllers/ProductController.js');

const app = express();
const port = 3000;

// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/products/:prodId', (req, res) => {
  ProductController.getProduct(req, res);
});

app.get('/products', (req, res) => {
  const { available } = req.query;

  if (available === 'true') {
    ProductController.getAllAvailableProducts(req, res);
  } else {
    ProductController.getAllProducts(req, res);
  }
});

app.post('/purchase', (req, res) => {
  ProductController.buyProduct(req, res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
