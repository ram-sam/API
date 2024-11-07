const express = require('express');
const {
  addGoal,
  getGoals,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, addGoal);
router.get('/', auth, getGoals);
router.put('/:id', auth, updateGoal);
router.delete('/:id', auth, deleteGoal);

module.exports = router;