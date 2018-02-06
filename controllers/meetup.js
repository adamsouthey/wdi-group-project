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
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err));

}

function getEventProxy(req, res) {
  console.log('req.params',req.params);
  rp({
    url: `https://api.meetup.com/${req.params.groupName}/events/${req.params.eventId}`,
    method: 'GET',
    json: true,
    qs: {
      key: `${apiKey}`
    }
  })
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err));
}
module.exports = {
  proxy: getEventsProxy,
  proxyId: getEventProxy
};
