const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Sistema de controle de estoque de cadeiras</h1>');
});

app.listen(port, () => {
  console.log(`Servidor em execução na porta: ${port}`);
});
