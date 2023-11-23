const express = require('express');

const router = express.Router();

const User = require('../Models/New_User_Model')

router.get('/', async (req, res) => {
  try {
    const allUsers = await User.find({}, {__v: 0});
    res.send(allUsers);
  } catch (error) {
    console.log(error);
  }
});

router.get('/:id', (req, res) => {
  res.send('Getting the user by id...')
});

router.post('/', async (req, res) => {
  try {
    if(typeof req.body.username === 'string'){
      const user = new User(req.body);
      await user.save();
      res.send('New user added to the database.');
    }else{
      res.send('The username should be a String.');
    }

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