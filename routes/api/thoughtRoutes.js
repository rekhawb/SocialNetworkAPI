const router = require('express').Router();
const { 
  getThoughts,
  createThought,
  getSingleThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thoughtControllers');

// get all thoughts
router.route('/').get(getThoughts);

// get single thought
router.route('/:thoughtId').get(getSingleThought);

// add a new thought
router.route('/').post(createThought);

// update a new thought
router.route('/:thoughtId').put(updateThought);

//delete a thought
router.route('/:thoughtId').delete(deleteThought);

//add reaction to a thought
router.route('/:thoughtId/reactions').put(addReaction);

//delete reaction to a thought
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;