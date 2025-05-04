module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Goal', {
    description: DataTypes.STRING,
    image: DataTypes.STRING,
  });
};