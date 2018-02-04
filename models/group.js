const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true }
});

groupSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Post', groupSchema);
