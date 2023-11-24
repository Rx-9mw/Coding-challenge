const express = require('express');

const app = express();

const mongoose = require('mongoose');

const userRoutes = require('./Routes/User_Routes');

// Connecting to the Mongodb database with mongoose.
mongoose
  .connect('mongodb+srv://daznchallengecluster.gkyhlnn.mongodb.net/', {
    dbName: 'daznchallengecluster',
    user: 'smonek33',
    pass: 'ThL34uwsvWevVK3M'
  })
  .then(() => {
    console.log('Database is connected...');
  });

// Parsing the incoming requests to JSON.
app.use(express.json());

// Routing all /users requests to the User_Routes
app.use('/users', userRoutes);

// Handling all other not existing routes.
app.all('*', (req, res) => {
  res.status(404).send('Not Found!');
})

// Listening for requests.
app.listen(3000, '0.0.0.0', () => {
  console.log('Server is running on port 3000...')
});