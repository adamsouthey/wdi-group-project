const rp = require('request-promise');
const apiKey = process.env.MEETUP_API_KEY;


function getEventsProxy(req, res) {
  rp({
    url: 'https://api.meetup.com/find/upcoming_events/',
    method: 'GET',
    json: true,
    qs: {
      key: `${apiKey}`,
      lat: '51.5153',
      lon: '0.072',
      // fields:
      radius: '10'
    }
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
}

module.exports = {
  proxy: getEventsProxy
};
