const rp = require('request-promise');


function meetupProxy(req, res) {
  rp({
    url: 'https://api.meetup.com/find/upcoming_events?photo-host=public&page=20&sig_id=240914666&sig=d7ab433738473e8efe8f309096e2d34dd67fd047',
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
