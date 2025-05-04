module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Product', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    category: DataTypes.STRING,
    image: DataTypes.STRING,
  });
};