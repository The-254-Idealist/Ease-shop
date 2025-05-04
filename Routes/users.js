const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');
const auth = require('../middleware/auth');
const role = require('../middleware/role');

router.use(auth);
router.get('/', role(['admin']), userCtrl.getAllUsers);
router.get('/:id', role(['admin', 'manager']), userCtrl.getUser);
router.put('/:id', role(['admin', 'manager']), userCtrl.updateUser);
router.delete('/:id', role(['admin']), userCtrl.deleteUser);

module.exports = router;