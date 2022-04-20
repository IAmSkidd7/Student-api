const { Thought, User } = require('../models');

module.exports = {
  getThoughts(req, res) {
    Thought.find()
    .then((thoughts) => res.json(thoughts))
    .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId})
    .select('-__v')
    .then((thought) =>
    !thought
      ? res.status(404).json({ message: 'No thought with that ID '})
      : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
  },
  createThought(req, res) {
    Thought.create(req.body)
    .then((dbThoughtData))
    .catch((err) => res.status(500).json(err));
  },
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { new: true }
    )
    .then((dbThoughtData) => {
      if (!dbThoughtData) {
        return res.status(404).json({ message: 'No thoughts with this ID'})
      }
      res.json(dbThoughtData);
    })
    .catch((err) => res.status(500).json(err));
  },
  deleteThought(req, res) {
    Thought.findOneAndDelete(req.body)
    .then((dbThoughtData) => res.json(dbThoughtData))
    .catch((err) => res.status(500).json(err));
  },
  addReaction(req, res) {
    User.findOneAndUpdate(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  deleteReaction(req, res) {
    User.findOneAndUpdate(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  }
};