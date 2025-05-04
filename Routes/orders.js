const express = require('express');
const router = express.Router();
const orderCtrl = require('../controllers/orders');
const auth = require('../middleware/auth');
const role = require('../middleware/role');

router.use(auth);
router.post('/', orderCtrl.createOrder);
router.get('/me', orderCtrl.getUserOrders);
router.get('/', role(['admin', 'manager']), orderCtrl.getAllOrders);

module.exports = router;