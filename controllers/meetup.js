const rp = require('request-promise');

function meetupProxy(req, res) {
  rp({
    url: 'https://api.meetup.com/find/upcoming_events/?lat=51&lon=-0.12&key=4262f441d125f665b6359c401776',
    method: 'GET',
    json: true
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
}

module.exports = {
  proxy: meetupProxy
};
