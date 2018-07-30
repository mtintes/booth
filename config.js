var dotenv = require('dotenv');
var cfg = {};

dotenv.config({path: '.env'});

cfg.ideaApi = process.env.ideaApi;

console.log("did the api work " +cfg.ideaApi);

module.exports = cfg;