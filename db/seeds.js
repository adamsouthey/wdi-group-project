const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const User = require('../models/user');
const Group = require('../models/group');
const { db, env } = require('../config/environment');
mongoose.connect(db[env]);

User.collection.drop();
Group.collection.drop();

User
  .create([{
    username: 'amadea',
    email: 'amadea@ga.co',
    password: 'password',
    passwordConfirmation: 'password'
  }, {
    username: 'adam',
    email: 'adam@ga.co',
    password: 'password',
    passwordConfirmation: 'password'
  }, {
    username: 'will',
    email: 'will@ga.co',
    password: 'password',
    passwordConfirmation: 'password'
  }])
  .then((users) => {
    console.log(`${users.length} users created!`);

    return Group.create([{
      name: 'Learn to Code',
      image: 'https://www.deeperblue.com/wp-content/uploads/2017/04/AdobeStock_62687098.jpeg',
      price: 1
    },{
      name: 'Learn to Code',
      image: 'https://www.deeperblue.com/wp-content/uploads/2017/04/AdobeStock_62687098.jpeg',
      price: 2
    },{
      name: 'Learn to Code',
      image: 'https://www.deeperblue.com/wp-content/uploads/2017/04/AdobeStock_62687098.jpeg',
      price: 3
    },{
      name: 'Learn to Code',
      image: 'https://www.deeperblue.com/wp-content/uploads/2017/04/AdobeStock_62687098.jpeg',
      price: 4
    },{
      name: 'Learn to Code with Amadayeahhh',
      image: 'https://www.deeperblue.com/wp-content/uploads/2017/04/AdobeStock_62687098.jpeg',
      price: 5
    },{
      name: 'Learn to Code with Heath',
      image: 'https://www.deeperblue.com/wp-content/uploads/2017/04/AdobeStock_62687098.jpeg',
      price: 6
    },{
      name: 'Learn to Code with Will "i dont queue" Stearn',
      image: 'https://www.deeperblue.com/wp-content/uploads/2017/04/AdobeStock_62687098.jpeg',
      price: 7
    },{
      name: 'Learn to Code with Emily',
      image: 'https://www.deeperblue.com/wp-content/uploads/2017/04/AdobeStock_62687098.jpeg',
      price: 7
    },{
      name: 'Learn to Code with Guy',
      image: 'https://www.deeperblue.com/wp-content/uploads/2017/04/AdobeStock_62687098.jpeg',
      price: 7
    }]);
  })
  .then((groups) => {
    console.log(`${groups.length} groups created!`);
  })
  .finally(() => {
    return mongoose.connection.close();
  })
  .catch(err => console.log(err));
