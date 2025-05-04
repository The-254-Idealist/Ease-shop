const db = require("../models");
const Goal = db.Goal;

exports.createGoal = async (req, res) => res.json(await Goal.create({ ...req.body, UserId: req.user.id }));
exports.getGoals = async (req, res) => res.json(await Goal.findAll({ where: { UserId: req.user.id } }));
exports.updateGoal = async (req, res) => {
  await Goal.update(req.body, { where: { id: req.params.id, UserId: req.user.id } });
  res.json({ message: "Goal updated" });
};
exports.deleteGoal = async (req, res) => {
  await Goal.destroy({ where: { id: req.params.id, UserId: req.user.id } });
  res.json({ message: "Goal deleted" });
};