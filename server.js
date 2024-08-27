const express = require('express');
const app = require('./app');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server fonctionne sur le port 3000 ${PORT}.`);
});