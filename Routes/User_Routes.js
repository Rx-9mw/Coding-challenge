const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Getting a list of all users...');
});

router.get('/:id', (req, res) => {
  res.send('Getting the user by id...')
});

router.post('/', async (req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
});

router.delete('/:id', (req, res) => {
  res.send('Deleting the user...')
});

router.patch('/:id', (req, res) => {
  res.send('Updating user by id...')
});

module.exports = router;