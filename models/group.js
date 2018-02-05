const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  meetupId: String,
  members: [{ type: mongoose.Schema.ObjectId, ref: 'User'}]
});

groupSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Group', groupSchema);

// when 'join group' is clicked (ng-click="vm.joinGroup()) the user's id is pushed into the members array and either creates a group or joins an existing group
// Goes to groups front end controller function for joining a groups
// url from factory ??
// passed to function from controller in back end which pushes user id into object
