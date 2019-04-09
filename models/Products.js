const sql = require('../db.js');

/**
 * Get a product with id
 * @param {string} id - the id of the product
 * @param {callback} callback - a function callback
 * @return {object} the product object from the database
 */
const getProduct = (id, callback) => {
  sql.query('SELECT * FROM products WHERE id = ?', [id], (error, results) => {
    if (error) {
      return callback(error, null);
    }

    return callback(null, results[0]);
  });
};

/**
 * Get all products
 * @param {callback} callback - a function callback
 * @return {object[]} an array of product objects
 */
const getAllProducts = callback => {
  sql.query('SELECT * FROM products', (error, results) => {
    if (error) {
      return callback(error, null);
    }

    return callback(null, results);
  });
};

/**
 * Get all available products
 * @param {callback} callback - a function callback
 * @return {object[]} an array of product objects
 */
const getAllAvailableProducts = callback => {
  sql.query(
    'SELECT * FROM products WHERE inventory_count > 0',
    (error, results) => {
      if (error) {
        return callback(error, null);
      }

      return callback(null, results);
    }
  );
};

/**
 * Purchase the product with id
 * @param {string} id - the id of the product
 * @param {callback} callback - a function callback
 * @return {boolean} status of the purchase
 */
const buyProduct = (id, callback) => {
  sql.query(
    'UPDATE products SET inventory_count = inventory_count - 1 WHERE id = ?',
    [id],
    (error, result) => {
      if (error) {
        return callback(error, null);
      }

      return callback(null, result);
    }
  );
};

module.exports = {
  getProduct,
  getAllProducts,
  getAllAvailableProducts,
  buyProduct
};
