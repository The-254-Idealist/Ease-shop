const db = require("../models");
const User = db.User;

exports.getAllUsers = async (req, res) => res.json(await User.findAll());
exports.getUser = async (req, res) => res.json(await User.findByPk(req.params.id));
exports.updateUser = async (req, res) => {
  await User.update(req.body, { where: { id: req.params.id } });
  res.json({ message: "Updated" });
};
exports.deleteUser = async (req, res) => {
  await User.destroy({ where: { id: req.params.id } });
  res.json({ message: "Deleted" });
};