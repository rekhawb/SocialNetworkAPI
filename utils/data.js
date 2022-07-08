const username = [
    'Aaran.Aaran'
];


// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUserName = () =>
  `${getRandomArrItem(username)}}${Math.floor(Math.random() * 10 + 1)}`;

  module.exports = {
    getRandomUserName,
  };