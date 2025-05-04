const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Product = require('./product')(sequelize, Sequelize);
db.Goal = require('./goal')(sequelize, Sequelize);
db.Order = require('./order')(sequelize, Sequelize);
db.Cart = require('./cart')(sequelize, Sequelize);
db.CartItem = require('./cartItem')(sequelize, Sequelize);

// Relations
db.User.hasMany(db.Goal);
db.Goal.belongsTo(db.User);

db.User.hasMany(db.Order);
db.Order.belongsTo(db.User);
db.Product.hasMany(db.Order);
db.Order.belongsTo(db.Product);

db.User.hasOne(db.Cart);
db.Cart.belongsTo(db.User);
db.Cart.hasMany(db.CartItem);
db.CartItem.belongsTo(db.Cart);
db.Product.hasMany(db.CartItem);
db.CartItem.belongsTo(db.Product);

module.exports = db;