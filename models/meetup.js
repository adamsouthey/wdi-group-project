const mongoose = require('mongoose');

const meetupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  local_date: { type: String, required: true },
  local_time: { type: String, required: true },
  venue_name: { type: String, required: true },
  address_1: { type: String, required: true },
  city: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  lat: { type: Number, required: true },
  lon: { type: Number, required: true },
  link: { type: String, required: true },
  description: { type: String, required: true }
});

meetupSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Meetup', meetupSchema);
