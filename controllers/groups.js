const Group = require('../models/group');

function indexRoute(req, res, next) {
  Group
    .find()
    .exec()
    .then(groups => res.status(200).json(groups))
    .catch(next);
}

// getting group back from the db
function showRoute(req, res, next) {
  Group
    .findOne({ meetupId: req.params.meetupId })
    .populate('createdBy comments.createdBy')
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

function leaveGroupRoute(req, res, next) {
  Group
    .findOne({ meetupId: req.params.meetupId })
    .exec()
    .then((group) => {
      if(!group) return res.notFound();

      const index = group.members.indexOf(req.user.id);
      group.members.splice(index, 1);

      return group.save();
    })
    .then((group) => {
      res.json(group);
    })
    .catch(next);
}


function addCommentRoute(req, res, next) {
  req.body.createdBy = req.user;

  Group
    .findOne({ meetupId: req.params.meetupId })
    .exec()
    .then((group) => {
      if(!group) return res.notFound();

      const comment = group.comments.create(req.body);
      group.comments.push(comment);

      return group.save()
        .then(() => res.json(comment));
    })
    .catch(next);
}

function deleteCommentRoute(req, res, next) {
  Group
    .findOne({ meetupId: req.params.meetupId })
    .exec()
    .then((group) => {
      if(!group) return res.notFound();

      const comment = group.comments.id(req.params.commentId);
      comment.remove();

      return group.save();
    })
    .then(() => res.status(204).end())
    .catch(next);
}


module.exports = {
  index: indexRoute,
  show: showRoute,
  join: joinGroupRoute,
  leave: leaveGroupRoute,
  addComment: addCommentRoute,
  deleteComment: deleteCommentRoute
};
