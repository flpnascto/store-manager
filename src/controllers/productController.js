const Product = require('../services/productService');

const create = async (req, res) => {
  const { name, quantity } = req.body;

  const { code, newProduct } = await Product.create(name, quantity);
  res.status(code).json(newProduct);
};

const findAll = async (req, res) => {
  const { code, productsList } = await Product.findAll();
  res.status(code).json({ products: productsList });
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { code, product } = await Product.findById(id);
  res.status(code).json(product);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  const { code, product } = await Product.update(id, name, quantity);
  res.status(code).json(product);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const { code, deletedCount } = await Product.remove(id);
  res.status(code).json(deletedCount);
};

module.exports = {
  create,
  findAll,
  findById,
  update,
  remove,
};
