const express = require('express');
const router  = express.Router();
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');
const groups = require('../controllers/groups');
const meetup = require('../controllers/meetup');
const darkSky = require('../controllers/darkSky');

router.route('/groups')
  .all(secureRoute)
  .get(groups.index);


router.route('/groups/:id')
  .all(secureRoute)
  .get(groups.show);

router.route('/groups/:meetupId/join')
  .all(secureRoute)
  .post(groups.join);


router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/events')
  .get(meetup.proxy);

router.route('/events/:groupName/:eventId')
  .get(meetup.proxyId);

router.route('/weather')
  .get(darkSky.proxy);

router.route('/*').get((req, res) => res.json({ message: 'Not found'}));

module.exports = router;
