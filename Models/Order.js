module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Order', {
    quantity: DataTypes.INTEGER,
    date: DataTypes.DATE,
  });
};