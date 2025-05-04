const express = require('express');
const router = express.Router();
const goalCtrl = require('../controllers/Goals');
const auth = require('../middleware/auth');

router.use(auth);
router.get('/', goalCtrl.getGoals);
router.post('/', goalCtrl.createGoal);
router.put('/:id', goalCtrl.updateGoal);
router.delete('/:id', goalCtrl.deleteGoal);

module.exports = router;