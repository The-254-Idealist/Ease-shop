const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/Products');
const auth = require('../middleware/auth');
const role = require('../middleware/role');

router.get('/', productCtrl.getAllProducts);
router.get('/:id', productCtrl.getProduct);

router.use(auth);
router.post('/', role(['admin']), productCtrl.createProduct);
router.put('/:id', role(['admin']), productCtrl.updateProduct);
router.delete('/:id', role(['admin']), productCtrl.deleteProduct);

module.exports = router;