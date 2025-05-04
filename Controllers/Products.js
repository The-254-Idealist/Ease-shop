const db = require("../models");
const Product = db.Product;

exports.createProduct = async (req, res) => res.json(await Product.create(req.body));
exports.getAllProducts = async (req, res) => res.json(await Product.findAll());
exports.getProduct = async (req, res) => res.json(await Product.findByPk(req.params.id));
exports.updateProduct = async (req, res) => {
  await Product.update(req.body, { where: { id: req.params.id } });
  res.json({ message: "Product updated" });
};
exports.deleteProduct = async (req, res) => {
  await Product.destroy({ where: { id: req.params.id } });
  res.json({ message: "Product deleted" });
};