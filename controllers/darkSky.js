const rp = require('request-promise');
const apiKey = process.env.DARK_SKIES_API_KEY;

function darkSkyProxy(req, res) {
  rp({
    url: `https://api.darksky.net/forecast/${apiKey}/51.5153, -0.0722`,
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
  proxy: darkSkyProxy
};
