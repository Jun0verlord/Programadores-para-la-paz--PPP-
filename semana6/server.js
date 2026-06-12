const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Servidor de semana 6');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor escuchando en ${port}`));
