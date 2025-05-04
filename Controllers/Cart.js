const db = require("../models");
const Cart = db.Cart;
const CartItem = db.CartItem;
const Order = db.Order;

exports.getCart = async (req, res) => {
  const cart = await Cart.findOne({ where: { UserId: req.user.id }, include: CartItem });
  res.json(cart);
};

exports.addToCart = async (req, res) => {
  let cart = await Cart.findOne({ where: { UserId: req.user.id } });
  if (!cart) cart = await Cart.create({ UserId: req.user.id });
  await CartItem.create({ ...req.body, CartId: cart.id });
  res.json({ message: "Item added to cart" });
};

exports.checkout = async (req, res) => {
  const cart = await Cart.findOne({ where: { UserId: req.user.id }, include: CartItem });
  if (!cart) return res.status(404).json({ message: "Cart not found" });
  const orders = await Promise.all(
    cart.CartItems.map(item => Order.create({ UserId: req.user.id, ProductId: item.ProductId, quantity: item.quantity, date: new Date() }))
  );
  await CartItem.destroy({ where: { CartId: cart.id } });
  res.json({ message: "Checkout complete", orders });
};