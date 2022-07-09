const { Schema, model } = require('mongoose');


function formatDate(date){
    
    const formattedDate =new Date(date).toLocaleDateString({},
  {timeZone:"UTC",month:"long", day:"2-digit", year:"numeric"}
  )

  const formattedTime =new Date(date).toLocaleTimeString('en-US');

  return formattedDate +"  at  " + formattedTime;

}

const Reaction = new Schema(
    {
        reactionBody:
        {
            type: String,
            required:true,
            minlength: 1,
            maxlength: 280,
    } ,
    userName: 
    {
        type:String,
        required:true
    },
    createdAt: {
        type: Date, 
        default: Date.now ,
                 get: (date) =>formatDate(date)
       },
    }
    );

// Schema to create User model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
  createdAt: {
     type: Date, 
     default: Date.now ,
     /*get: (date) => {
        if (date) return date.toISOString().split("T") [0];
      },*/
      get: (date) =>formatDate(date)
    },
  username:{
    type:String,
    required:true
  },
  reactions:[Reaction],
  },

  {
    timestamps: true,
    toJSON: { getters: true, virtuals: true },
    id: false,
  }
 
);


// Create a virtual property `friendsCount`
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Initialize our User model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;