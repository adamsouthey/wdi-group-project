const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});

commentSchema.set('toJSON', { virtuals: true });


const groupSchema = new mongoose.Schema({
  meetupId: String,
  members: [{ type: mongoose.Schema.ObjectId, ref: 'User'}],
  comments: [ commentSchema ]
});

groupSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Group', groupSchema);
