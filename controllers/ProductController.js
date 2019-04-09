const Products = require('../models/Products.js');

/**
 * Get a product with id
 * @param {object} req - the express request object
 * @param {object} res - the express response object
 * @return {null}
 */
const getProduct = (req, res) => {
  const { prodId } = req.params;

  Products.getProduct(prodId, (err, product) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (product === null || product === undefined) {
      return res.status(401).json({ product: [] });
    }
    return res.status(200).json({ product });
  });
};

/**
 * Get all products
 * @param {object} req - the express request object
 * @param {object} res - the express response object
 * @return {null}
 */
const getAllProducts = (req, res) => {
  Products.getAllProducts((err, products) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    return res.status(200).json({ products });
  });
};

/**
 * Get all available products
 * @param {object} req - the express request object
 * @param {object} res - the express response object
 * @return {null}
 */
const getAllAvailableProducts = (req, res) => {
  Products.getAllAvailableProducts((err, products) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    return res.status(200).json({ products });
  });
};

const buyProduct = (req, res) => {
  const { id } = req.body;

  Products.buyProduct(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.changedRows === 0) {
      return res.status(401).json({ error: 'Bad id' });
    }
    return res.status(200).end();
  });
};

module.exports = {
  getProduct,
  getAllProducts,
  getAllAvailableProducts,
  buyProduct
};
