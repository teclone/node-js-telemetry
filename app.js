require('dotenv').config();
const { start, connect } = require('./build');

connect().then(() => {
  start();
});
