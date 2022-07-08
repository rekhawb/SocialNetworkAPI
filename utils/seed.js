const connection = require('../config/connection');
const User = require('../models/User');
const { getRandomUserName } = require('./data');

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  // Delete the entries in the collection
  await User.deleteMany({});

  // Empty arrays for randomly generated users
  const users = [];
 const friends = [];
 
  for (let i = 0; i < 1; i++) {
    const name = getRandomUserName();
  
    const reactions = {
  reactionBody:'',
  userName:'',
  createdAt:''
    };

   /* const thoughts = {
        thoughtText:'',
        createdAt:'',
        userName:'',
        reactions}; 
        */

        const thoughts = [];
    const newUser = new User({
      username: name.split('}')[0],
      email:'w@ww.com'/*,
      thoughts,
      friends*/
    });

    await newUser.save();
    /*users.push({
        newUser
  });*/
}
  // Wait for the users to be inserted into the database
  //await User.collection.insertMany(users);
  

  console.table(users);
  console.timeEnd('seeding complete 🌱');
  process.exit(0);
});
