const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const User = require('../models/user');
const { db, env } = require('../config/environment');

mongoose.connect(db[env]);

User.collection.drop();

User
  .create([{
    username: 'amadea',
    email: 'amadea@ga.co',
    firstname: 'amadea',
    lastname: 'amadea',
    country: 'England',
    password: 'password',
    passwordConfirmation: 'password'
  }, {
    username: 'adam',
    firstname: 'adam',
    lastname: 'adam',
    email: 'adam@ga.co',
    country: 'England',
    password: 'password',
    passwordConfirmation: 'password'
  }, {
    username: 'will',
    firstname: 'will',
    lastname: 'will',
    email: 'will@ga.co',
    country: 'England',
    password: 'password',
    passwordConfirmation: 'password'
  }])
  .then(users => console.log(`${users.length} users created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
