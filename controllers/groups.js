const Group = require('../models/group');

function indexRoute(req, res, next) {
  Group
    .find()
    // .populate('createdBy')
    .exec()
    .then((groups) => res.json(groups))
    .catch(next);
}

function showRoute(req, res, next) {
  Group
    .findById(req.params.id)
    // .populate('createdBy comments.createdBy')
    .exec()
    .then((group) => {
      if(!group) return res.notFound();

      res.json(group);
    })
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute
};
