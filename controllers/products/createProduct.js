function createProduct(req, res) {
  res.status(201).json({ message: 'Товар создан' });
}

module.exports = createProduct;
