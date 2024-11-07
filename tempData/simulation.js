let simulationData = [];

module.exports = {
  addData: (data) => {
    simulationData.push(data);
  },
  getData: () => {
    return simulationData;
  },
  clearData: () => {
    simulationData = [];
  },
};

const express = require('express');
const { addData, getData, clearData } = require('../tempData/simulation');
const router = express.Router();

router.post('/add', (req, res) => {
  addData(req.body);
  res.send('Data added');
});

router.get('/', (req, res) => {
  res.json(getData());
});

router.delete('/clear', (req, res) => {
  clearData();
  res.send('Data cleared');
});

module.exports = router;
