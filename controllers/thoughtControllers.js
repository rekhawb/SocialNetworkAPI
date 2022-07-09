const { User, Thought } = require('../models');

module.exports = {
    
//get all thoughts

getThoughts(req, res) {
  Thought.find()
    .then((thoughts) => res.json(thoughts))
    .catch((err) => res.status(500).json(err));
},

getSingleThought(req, res) {
  Thought.findOne({ _id: req.params.thoughtId })
    .then((thought) =>
      !thought
        ? res.status(404).json({ message: 'No thought with that ID' })
        : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
},

createThought(req, res) {
 Thought.create(req.body)
    .then((newThought) => {
      return User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { thoughts: newThought._id } },
        { new: true }
      );
    })
    .then((user) =>
      !user
        ? res.status(404).json({
            message: 'Thought Created, but found no user with that ID',
          })
        : res.json('Created the thought 🎉')
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
},


updateThought(req, res) {
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $set: req.body },
    { runValidators: true, new: true }
  )
    .then((thought) =>
      !thought
        ? res.status(404).json({ message: 'No thought with this id!' })
        : res.json(thought)
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
},

deleteThought(req, res) {
  Thought.findOneAndRemove({ _id: req.params.thoughtId })
    .then((thought) =>
      !thought
        ? res.status(404).json({ message: 'No thought with this id!' })
        : User.findOneAndUpdate(
            {thoughts: req.params.thoughtId },
            { $pull: { thoughts: req.params.thoughtId } },
            { new: true }
          )
    )
    .then((user) =>
      !user
        ? res.status(404).json({
            message: 'Thought deleted but no user with this id!',
          })
        : res.json({ message: 'Thought successfully deleted!' })
    )
    .catch((err) => res.status(500).json(err));
},

addReaction(req, res) {
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $addToSet: { reactions: req.body} },
    { runValidators: true, new: true }
  )
    .then((thought) =>
      !thought
        ? res.status(404).json({ message: 'No thought with this id!' })
        : res.json(thought)
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
},

// delete reaction from a thought
deleteReaction(req,res){
  Thought.findOneAndUpdate(
    {_id: req.params.thoughtId },
    { $pull: { reactions: {_id:req.params.reactionId} } },
    { new: true }
  )

.then((reaction) =>
!reaction
? res.status(404).json({
    message: 'no thought with the ID!',
  })
: res.json({ message: 'Reaction deleted successfully!' })
)
.catch((err) => res.status(500).json(err));
},


};


//http://localhost:3001/api/thoughts/62c9b3997df7ce184477a3f6/reactions
/*
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "62c99d4b9e1e34e7a6f56d56"
}
*/