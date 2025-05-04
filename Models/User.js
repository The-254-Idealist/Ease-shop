module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    ID_No: { type: DataTypes.STRING, unique: true },
    phone_NO: DataTypes.STRING,
    profile_img: DataTypes.STRING,
    ID_img: DataTypes.STRING,
    password: DataTypes.STRING,
    role: { type: DataTypes.STRING, defaultValue: 'user' },
  });
};