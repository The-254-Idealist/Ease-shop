const express = require('express');
const router = express.Router();
const cartCtrl = require('../controllers/Cart');
const auth = require('../middleware/auth');

router.use(auth);
router.get('/', cartCtrl.getCart);
router.post('/add', cartCtrl.addToCart);
router.post('/checkout', cartCtrl.checkout);

module.exports = router;