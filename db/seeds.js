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
    firstname: 'Amadea',
    lastname: 'Kimmins',
    country: 'England',
    password: 'password',
    passwordConfirmation: 'password'
  }, {
    username: 'adam',
    firstname: 'Adam',
    lastname: 'Southey',
    email: 'adam@ga.co',
    country: 'England',
    password: 'password',
    passwordConfirmation: 'password'
  }, {
    username: 'will',
    firstname: 'Will',
    lastname: 'Stearn',
    email: 'will@ga.co',
    country: 'England',
    password: 'password',
    passwordConfirmation: 'password'
  }])
  .then(users => console.log(`${users.length} users created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
