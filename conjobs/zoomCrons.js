const cronJob = require('node-cron');

module.exports = (app) => {

  try {
    // every 10 seconds
    cronJob.schedule("*/10 * * * * 1-5", () => {
      console.log('every 10 sec');

    })
  } catch(err) {
    console.log('invalid pattern');
  }


}