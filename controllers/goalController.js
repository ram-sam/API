const Goal = require('../models/Goal');

exports.addGoal = async (req, res) => {
  const { name, targetAmount, deadline } = req.body;
  try {
    const newGoal = new Goal({
      user: req.user.id,
      name,
      targetAmount,
      deadline,
    });
    const goal = await newGoal.save();
    res.json(goal);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ user: req.user.id });
    res.json(goals);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateGoal = async (req, res) => {
  const { currentAmount } = req.body;
  try {
    let goal = await Goal.findById(req.params.id);
    if (!goal) return res.status(404).json({ msg: 'Goal not found' });

    goal.currentAmount = currentAmount;
    await goal.save();
    res.json(goal);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteGoal = async (req, res) => {
  try {
    await Goal.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Goal removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};