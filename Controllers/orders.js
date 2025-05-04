const db = require("../models");
const Order = db.Order;

exports.createOrder = async (req, res) => {
  const { ProductId, quantity } = req.body;
  const order = await Order.create({ ProductId, UserId: req.user.id, quantity, date: new Date() });
  res.json(order);
};

exports.getAllOrders = async (req, res) => res.json(await Order.findAll());
exports.getUserOrders = async (req, res) => res.json(await Order.findAll({ where: { UserId: req.user.id } }));