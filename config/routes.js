const express = require('express');
const router  = express.Router();
const auth = require('../controllers/auth');
// const secureRoute = require('../lib/secureRoute');
// const groups = require('../controllers/groups');
//
// router.route('/groups')
//   .all(secureRoute)
//   .get(groups.index)
//   .post(groups.create);
//
// router.route('/groups/:id')
//   .all(secureRoute)
//   .get(groups.show)
//   .put(groups.update)
//   .delete(groups.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

module.exports = router;
