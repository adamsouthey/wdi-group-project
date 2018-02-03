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
      name: 'Learn to Code'
    },{
      name: 'Learn to Code'
    },{
      name: 'Learn to Code'
    },{
      name: 'Learn to Code'
    },{
      name: 'Learn to Code'
    }]);
  })
  .then((groups) => {
    console.log(`${groups.length} groups created!`);
  })
  .finally(() => {
    return mongoose.connection.close();
  })
  .catch(err => console.log(err));
