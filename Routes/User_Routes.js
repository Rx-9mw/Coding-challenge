const express = require('express');

const {getAllUsers, getUserById, postUser, deleteUser, patchUser} = require('../Controllers/Route_methods');

const router = express.Router();

const User = require('../Models/New_User_Model')

// Finished GET for all users.
router.get('/', getAllUsers );

// Finished GET for one user
router.get('/:id', getUserById );


router.post('/', postUser );

router.delete('/:id', deleteUser );

// Finished PATCH request.
 router.patch('/:id', patchUser );

module.exports = router;