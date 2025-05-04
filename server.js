const express = require('express');
const app = express();
const db = require('./models');
const cookieParser = require('cookie-parser');
require('dotenv').config();

app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/products', require('./routes/products'));
app.use('/api/goals', require('./routes/goals'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/cart', require('./routes/cart'));

// Sync DB and Start Server
db.sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3000, () => console.log('Server running'));
});