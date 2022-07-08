const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
} = require('../../controllers/userControllers');

// /api/users
router.route('/').get(getUsers);

//single user id
router.route('/:userId').get(getSingleUser);

//post route
router.route('/').post(createUser);

module.exports = router;