const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  meetupId: String,
  members: [{ type: mongoose.Schema.ObjectId, ref: 'User'}]
});

groupSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Group', groupSchema);
