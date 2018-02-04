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
      local_date: '2018-02-08',
      local_time: '18:00',
      venue_name: 'Bar Nordic',
      address_1: '25 Newman St, London, Greater London W1T 1PN',
      city: 'London',
      image: 'https://www.deeperblue.com/wp-content/uploads/2017/04/AdobeStock_62687098.jpeg',
      price: 1,
      lat: 51.529998779296875,
      lon: -0.09000000357627869,
      link: 'https://www.meetup.com/London-New-Tech/events/246826170/',
      description: 'This event is primarily intended to help TALENT SEEKERS build out their teams and JOB SEEKERS find great places to work. It’s FREE and everyone is welcome to attend. This is part of a series of Meetups that originated in Silicon Valley and is now heading to Silicon Roundabout.'
    },{
      name: 'Learn to Code',
      local_date: '2018-02-08',
      local_time: '18:00',
      venue_name: 'Bar Nordic',
      address_1: '25 Newman St, London, Greater London W1T 1PN',
      city: 'London',
      image: 'https://www.deeperblue.com/wp-content/uploads/2017/04/AdobeStock_62687098.jpeg',
      price: 2,
      lat: 51.529998779296875,
      lon: -0.09000000357627869,
      link: 'https://www.meetup.com/London-New-Tech/events/246826170/',
      description: 'This event is primarily intended to help TALENT SEEKERS build out their teams and JOB SEEKERS find great places to work. It’s FREE and everyone is welcome to attend. This is part of a series of Meetups that originated in Silicon Valley and is now heading to Silicon Roundabout.'
    },{
      name: 'Learn to Code',
      local_date: '2018-02-08',
      local_time: '18:00',
      venue_name: 'Bar Nordic',
      address_1: '25 Newman St, London, Greater London W1T 1PN',
      city: 'London',
      image: 'https://www.deeperblue.com/wp-content/uploads/2017/04/AdobeStock_62687098.jpeg',
      price: 3,
      lat: 51.529998779296875,
      lon: -0.09000000357627869,
      link: 'https://www.meetup.com/London-New-Tech/events/246826170/',
      description: 'This event is primarily intended to help TALENT SEEKERS build out their teams and JOB SEEKERS find great places to work. It’s FREE and everyone is welcome to attend. This is part of a series of Meetups that originated in Silicon Valley and is now heading to Silicon Roundabout.'
    },{
      name: 'Learn to Code',
      local_date: '2018-02-08',
      local_time: '18:00',
      venue_name: 'Bar Nordic',
      address_1: '25 Newman St, London, Greater London W1T 1PN',
      city: 'London',
      image: 'https://www.deeperblue.com/wp-content/uploads/2017/04/AdobeStock_62687098.jpeg',
      price: 4,
      lat: 51.529998779296875,
      lon: -0.09000000357627869,
      link: 'https://www.meetup.com/London-New-Tech/events/246826170/',
      description: 'This event is primarily intended to help TALENT SEEKERS build out their teams and JOB SEEKERS find great places to work. It’s FREE and everyone is welcome to attend. This is part of a series of Meetups that originated in Silicon Valley and is now heading to Silicon Roundabout.'
    },{
      name: 'Learn to Code with Amadayeahhh',
      local_date: '2018-02-08',
      local_time: '18:00',
      venue_name: 'Bar Nordic',
      address_1: '25 Newman St, London, Greater London W1T 1PN',
      city: 'London',
      image: 'https://www.deeperblue.com/wp-content/uploads/2017/04/AdobeStock_62687098.jpeg',
      price: 5,
      lat: 51.529998779296875,
      lon: -0.09000000357627869,
      link: 'https://www.meetup.com/London-New-Tech/events/246826170/',
      description: 'This event is primarily intended to help TALENT SEEKERS build out their teams and JOB SEEKERS find great places to work. It’s FREE and everyone is welcome to attend. This is part of a series of Meetups that originated in Silicon Valley and is now heading to Silicon Roundabout.'
    },{
      name: 'Learn to Code with Heath',
      local_date: '2018-02-08',
      local_time: '18:00',
      venue_name: 'Bar Nordic',
      address_1: '25 Newman St, London, Greater London W1T 1PN',
      city: 'London',
      image: 'https://www.deeperblue.com/wp-content/uploads/2017/04/AdobeStock_62687098.jpeg',
      price: 6,
      lat: 51.529998779296875,
      lon: -0.09000000357627869,
      link: 'https://www.meetup.com/London-New-Tech/events/246826170/',
      description: 'This event is primarily intended to help TALENT SEEKERS build out their teams and JOB SEEKERS find great places to work. It’s FREE and everyone is welcome to attend. This is part of a series of Meetups that originated in Silicon Valley and is now heading to Silicon Roundabout.'
    },{
      name: 'Learn to Code with Will "i dont queue" Stearn',
      local_date: '2018-02-08',
      local_time: '18:00',
      venue_name: 'Bar Nordic',
      address_1: '25 Newman St, London, Greater London W1T 1PN',
      city: 'London',
      image: 'https://www.deeperblue.com/wp-content/uploads/2017/04/AdobeStock_62687098.jpeg',
      price: 7,
      lat: 51.529998779296875,
      lon: -0.09000000357627869,
      link: 'https://www.meetup.com/London-New-Tech/events/246826170/',
      description: 'This event is primarily intended to help TALENT SEEKERS build out their teams and JOB SEEKERS find great places to work. It’s FREE and everyone is welcome to attend. This is part of a series of Meetups that originated in Silicon Valley and is now heading to Silicon Roundabout.'
    },{
      name: 'Learn to Code with Emily',
      local_date: '2018-02-08',
      local_time: '18:00',
      venue_name: 'Bar Nordic',
      address_1: '25 Newman St, London, Greater London W1T 1PN',
      city: 'London',
      image: 'https://www.deeperblue.com/wp-content/uploads/2017/04/AdobeStock_62687098.jpeg',
      price: 8,
      lat: 51.529998779296875,
      lon: -0.09000000357627869,
      link: 'https://www.meetup.com/London-New-Tech/events/246826170/',
      description: 'This event is primarily intended to help TALENT SEEKERS build out their teams and JOB SEEKERS find great places to work. It’s FREE and everyone is welcome to attend. This is part of a series of Meetups that originated in Silicon Valley and is now heading to Silicon Roundabout.'
    },{
      name: 'Learn to Code with Guy',
      local_date: '2018-02-08',
      local_time: '18:00',
      venue_name: 'Bar Nordic',
      address_1: '25 Newman St, London, Greater London W1T 1PN',
      city: 'London',
      image: 'https://www.deeperblue.com/wp-content/uploads/2017/04/AdobeStock_62687098.jpeg',
      price: 9,
      lat: 51.529998779296875,
      lon: -0.09000000357627869,
      link: 'https://www.meetup.com/London-New-Tech/events/246826170/',
      description: 'This event is primarily intended to help TALENT SEEKERS build out their teams and JOB SEEKERS find great places to work. It’s FREE and everyone is welcome to attend. This is part of a series of Meetups that originated in Silicon Valley and is now heading to Silicon Roundabout.'
    }]);
  })
  .then((groups) => {
    console.log(`${groups.length} groups created!`);
  })
  .finally(() => {
    return mongoose.connection.close();
  })
  .catch(err => console.log(err));
