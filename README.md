# SocialNetworkAPI

Welcome to social network API. Here are some useful guidelines on how to use to create users, thoughts and add reactions.

List of api calls that can be used to view/create/update delete data
******************************************************************************************************
******************************************************************************************************
### View all users
- GET /api/users

### Add a  user
- POST /api/users

### Update data for a single user
- PUT /api/users/enter userId here

### Add friends
- PUT /api/users/enter userId here/friends/enter friendId here

(friendid is the userId of the user that we would like to add as a friend)
******************************************************************************************************

### Add a new thought. Newly created thought is included in the respective user's data under thoughts
- POST /api/thoughts

### View all thoughts
- GET  /api/thoughts

### Update a thought
- PUT /api/thoughts/enter thoughtId here

### Delete a thought. Deleted thought is deleted from user's data aswell
- DELETE /api/thoughts/enter thoughtId here


******************************************************************************************************

### Add a new reaction
- POST /api/thoughts/enter thoughtId here / reactions

### Delete a reaction
- DELETE /api/thoughts/enter thoughtId here / reactions/enter reactionId here

******************************************************************************************************
******************************************************************************************************
Video walkthrough links:

[video link 1](https://drive.google.com/file/d/1LCMFPSBV4mZvgU4gTkRlhlhIeyJlJLN3/view)

[video link 2](https://drive.google.com/file/d/1eXPDps6vW1OBz9FjrNeuRW8qF_VTYGQz/view)

[video link 3](https://drive.google.com/file/d/1rPDK6sB1WXD20cuz9e_swW38RIuLIv1I/view)