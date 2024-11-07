module.exports = function (err, req, res, next) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  };