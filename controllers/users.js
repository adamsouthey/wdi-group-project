const User = require('../models/user');

function showRoute(req, res, next) {
  User
    .findById(req.params.id)
    .populate('groups')
    .exec()
    .then((user) => {
      if(!user) return res.notFound();

      res.json(user);
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  User
    .findById(req.params.id)
    .then(user => {
      if(!user) return res.status(401).json({ message: 'No user found'});

      for(const field in req.body) {
        user[field] = req.body[field];
      }

      return user.save({ validateBeforeSave: false });
    })
    .then(user => res.json(user))
    .catch(next);
}

module.exports = {
  show: showRoute,
  update: updateRoute
};
