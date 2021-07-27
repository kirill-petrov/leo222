const router = require('express').Router();
const renderProductList = require('../controllers/products/renderProductList');
const createProduct = require('../controllers/products/createProduct');
const renderProductPage = require('../controllers/products/renderProductPage');
const updateProduct = require('../controllers/products/updateProduct');
const deleteProduct = require('../controllers/products/deleteProduct');

router.route('/')
  .get(renderProductList)
  .post(createProduct);

router.route('/:id')
  .get(renderProductPage)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;
