const User = require('../Models/New_User_Model');

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({}, {__v: 0});
    res.send(allUsers);

  } catch (error) {
    res.send('ERROR: ' + error.message);
  }

}

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id, {__v: 0});
    res.send(user);

  } catch (error) {
    res.send('ERROR: ' + error.message);
  }

}

const postUser = async (req, res) => {
  try {
    if(typeof req.body.username === 'string'){
      const user = new User(req.body);
      await user.save();
      res.send('New user added to the database.');
    }else{
      res.send('The username should be a String.');
    }

  } catch (error) {
    res.send('ERROR: ' + error.message);
  }

}

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    res.send('User has been deleted.');

  } catch (error) {
    res.send('ERROR: ' + error.message);
  }

}

const patchUser = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;
    let user;

    console.log(await User.findById(id))
    // Check if the user with the id is in the database
    if(await User.findById(id) === null){ return res.send('ERROR: Could not find a user with this id.') }
    
    // Check if the request for updating the streams was formed correctly
    if(update.updateNumberOfStreams === undefined){ return res.status(400).send('ERROR: Invalid PATCH request.') }

    // Assign info from the database to the user object
    user = await User.findById(id);

    const streams = user.numberOfCurrentStreams + update.updateNumberOfStreams;

    // Check if the streams are between 0-3, the number of passed in streams is a string or if the number has decimal places
    if(typeof streams === 'string' || streams % 1 !== 0) {
      return res.send('ERROR: Please input the correct number of streams to update with. (eg. 1, -1)');
    }else if (streams > 3 || streams < 0) {
      return res.send('ERROR: The number of streams cannot be lower than 0 or higher than 3.');
    }

    // Assign the number of streams to the user object and update the database
    user.numberOfCurrentStreams = streams;
    await User.findByIdAndUpdate(id, user);

    res.send('User has been updated.');

  } catch (error) {
    res.send(`ERROR: The id given is incorrect.`);
    console.log(error.message);
  }
}

module.exports = {getAllUsers, getUserById, postUser, deleteUser, patchUser};