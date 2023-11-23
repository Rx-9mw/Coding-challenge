const express = require('express');

const router = express.Router();

const User = require('../Models/New_User_Model')

router.get('/', async (req, res) => {
  try {
    const allUsers = await User.find({}, {__v: 0});
    res.send(allUsers);

  } catch (error) {
    console.log(error.message);
  }

});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id, {__v: 0});
    res.send(user);

  } catch (error) {
    res.send("Couldn't find a user with this id.")
    console.log(error.message)
  }

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
    console.log(error.message);
  }

});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    res.send('User has been deleted.');

  } catch (error) {
    res.send("Couldn't find a user with this id.")
    console.log(error.message);
  }

});

router.patch('/:id', (req, res) => {
  
});

module.exports = router;