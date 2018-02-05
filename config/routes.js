const express = require('express');
const router  = express.Router();
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');
const groups = require('../controllers/groups');
const meetup = require('../controllers/meetup');
const darkSky = require('../controllers/darkSky');
//
router.route('/groups')
  .all(secureRoute)
  .get(groups.index);
//   .post(groups.create);
//
router.route('/groups/:id')
  .all(secureRoute)
  .get(groups.show);
//   .put(groups.update)
//   .delete(groups.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/events')
  .get(meetup.proxy);

router.route('/weather')
  .get(darkSky.proxy);

module.exports = router;
