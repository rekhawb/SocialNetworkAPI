const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/userControllers');

// /api/users
router.route('/').get(getUsers);

//single user id
router.route('/:userId').get(getSingleUser);

//post route
router.route('/').post(createUser);

//put route
router.route('/:userId').put(updateUser);

//delete route

router.route('/:userId').delete(deleteUser);

//add a friend

router.route('/:userId/friends/:friendId').put(addFriend);

//delete a friend

router.route('/:userId/friends/:friendId').delete(deleteFriend);


module.exports = router;