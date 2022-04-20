const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
// edit below
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId/reactions
// edit below
router.route('/thoughts/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route('/thoughts/:thoughtId/reactions').post(addReaction).delete(deleteReaction)

module.exports = router;