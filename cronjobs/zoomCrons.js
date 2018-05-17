const cronJob = require('node-cron');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const keys = require('../config/keys');

module.exports = (app) => {

  try {
    // every 10 seconds
    cronJob.schedule("*/10 * * * * 1-5", () => {
      console.log('every 10 sec');

      // Create payload for JWT to SHA256
      const payload = {
        iss: keys.ZOOM_API_KEY,
        exp: ((new Date()).getTime() + 5000)
      };
      // Generate JWT, add token to headers of GET to zoom api v2 call
      jwt.sign(
        payload,
        keys.ZOOM_API_SECRET, (err, token) => {
          axios.get('https://api.zoom.us/v2/users', { headers: { Authorization: `Bearer ${token}`} })
          .then(res => {
            console.log(res.data)
          })
          .catch(err => {
            console.log(err)
          })        
        }); 
    })

  } catch(err) {
    console.log('invalid pattern');
  }
}