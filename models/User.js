const { Schema, model } = require('mongoose');

 function validateEmail (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email:{
      type: String,
   required: [true, "Email required"],
    unique: true,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.path('email').validate(validateEmail,"Invalid email"); 

// Create a virtual property `friendsCount`
userSchema.virtual('friendsCount').get(function () {
  return this.friends.length;
});

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
