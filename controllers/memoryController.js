let memoryData = [];

// Controlador para adicionar dados temporários
exports.addMemoryData = (req, res) => {
  const { key, value } = req.body;
  memoryData.push({ key, value });
  res.status(201).json({ msg: 'Data added', memoryData });
};

// Controlador para obter dados temporários
exports.getMemoryData = (req, res) => {
  res.json(memoryData);
};

// Controlador para remover dados temporários
exports.removeMemoryData = (req, res) => {
  const { key } = req.body;
  memoryData = memoryData.filter(item => item.key !== key);
  res.json({ msg: 'Data removed', memoryData });
};
