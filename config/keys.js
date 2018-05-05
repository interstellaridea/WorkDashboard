if (process.env.NODE_ENV === 'production') {

  module.exports = require('./prod.js');

} else {

  console.log('N0T IN PRODUCTION MODE');
  module.exports = require('./dev.js');

}