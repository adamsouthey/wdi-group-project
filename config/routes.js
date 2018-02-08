const express = require('express');
const router  = express.Router();
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');
const groups = require('../controllers/groups');
const meetup = require('../controllers/meetup');
const darkSky = require('../controllers/darkSky');
const users = require('../controllers/users');


// group requests
router.route('/groups')
  .get(secureRoute, groups.index);
router.route('/groups/:meetupId') // getting group back from the db
  .get(secureRoute, groups.show);
router.route('/groups/:urlname/:meetupId/join')
  .post(secureRoute, groups.join);
router.route('/groups/:meetupId/leave')
  .delete(secureRoute, groups.leave);
router.route('/groups/:meetupId/comments')
  .post(secureRoute, groups.addComment);
router.route('/groups/:meetupId/comments/:commentId')
  .delete(secureRoute, groups.deleteComment);

// User request
router.route('/users/:id')
  .get(users.show)
  .put(users.update);

// router.route('/users/:id/edit')
//   .get(users.edit);

// Authentication
router.route('/register')
  .post(auth.register);
router.route('/login')
  .post(auth.login);

// Proxy requests
router.route('/events')
  .get(meetup.proxy);
router.route('/events/:groupName/:eventId')
  .get( meetup.proxyId);
router.route('/weather')
  .get(darkSky.proxy);


router.route('/*').get((req, res) => res.json({ message: 'Not found'}));

module.exports = router;
