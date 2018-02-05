const Group = require('../models/group');

function indexRoute(req, res, next) {
  Group
    .find()
    .exec()
    .then((groups) => res.json(groups))
    .catch(next);
}

function showRoute(req, res, next) {
  Group
    .findById(req.params.id)
    .exec()
    .then((group) => {
      if(!group) return res.notFound();

      res.json(group);
    })
    .catch(next);
}

function joinGroupRoute(req, res, next) {
  Group
    .findOne({ meetupId: req.params.meetupId })
    .exec()
    .then((group) => {
      if (!group) {
        return Group
          .create({ meetupId: req.params.meetupId, members: [req.user.id] });
      } else {

        group.members.push(req.user.id);
        return group.save();
      }
    })
    .then((group) => {
      res.json(group);
    })
    .catch(next);
}


module.exports = {
  index: indexRoute,
  show: showRoute,
  join: joinGroupRoute
};
