const calculateBalance = (transactions) => {
    return transactions.reduce((acc, transaction) => {
      return transaction.type === 'income'
        ? acc + transaction.amount
        : acc - transaction.amount;
    }, 0);
  };
  
module.exports = calculateBalance;
  
const express = require('express');
const { getTransactions } = require('../controllers/transactionController');
const calculateBalance = require('../utils/calculateBalance');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/balance', auth, async (req, res) => {
  try {
    const transactions = await getTransactions(req, res);
    const balance = calculateBalance(transactions);
    res.json({ balance });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
