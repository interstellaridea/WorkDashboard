const express = require('express'); 
const expressChromeLogger = require("express-chrome-logger");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const rp = require('request-promise');
const axios = require('axios');
const keys = require('./config/keys');

// Models
require('./models/Room');

// connnect to DB docker container
const connectWithRetry = () => {
  console.log(`Node connecting to MongoDB...`);
  mongoose.connect(keys.mongoDockerURI)
          .then( res => {
            console.log(`Connected!: ${res.connections[0].name}`)
          })
          .catch( err => {
            console.log(`ERROR: ${err}`)
            setTimeout(connectWithRetry, 3000)
          });
}
connectWithRetry(); // on start run connection

// Create express instance
const app = express();

// express middleware
app.use(expressChromeLogger);
app.use(bodyParser.json());

// CronJobs
require('./conjobs/zoomCrons')(app);

// Routes
app.get('/', (req, res) => {
  res.send({hey: 'there'})
});

// dev or heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);