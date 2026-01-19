const express = require('express');
const app = express();

const usuarioRoutes = require('./routes/usuario');

const hostname = '127.0.0.1';
const port = 3000;

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/usuario', usuarioRoutes);

app.get('/', (req, res) => {
  res.send('Servidor Node.js funcionando correctamente');
});

app.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}`);
});
