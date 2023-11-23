const express = require('express');

const app = express();

const userRoutes = require('./Routes/User_Routes');

app.use('/users', userRoutes);

app.all('*', (req, res) => {
  res.status(404).send('Not Found!');
})

app.listen(3000, '0.0.0.0');