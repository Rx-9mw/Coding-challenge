const express = require('express');

const app = express();

const mongoose = require('mongoose');

const userRoutes = require('./Routes/User_Routes');

mongoose
  .connect('mongodb+srv://daznchallengecluster.gkyhlnn.mongodb.net/', {
    dbName: 'daznchallengecluster',
    user: 'smonek33',
    pass: 'ThL34uwsvWevVK3M'
  })
  .then(() => {
    console.log('Database is connected...');
  });

app.use(express.json());

app.use('/users', userRoutes);

app.all('*', (req, res) => {
  res.status(404).send('Not Found!');
})

app.listen(3000, '0.0.0.0', () => {
  console.log('Server is running on port 3000...')
});