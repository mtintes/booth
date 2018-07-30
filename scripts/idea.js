var config = require('../config');

module.exports = function (robot) {

    var rp = require('request-promise-native');
  
    robot.respond('idea (.*)', function (msg) {
      var idea = msg[1];

      var options = {
        method: 'POST',
        uri: config.ideaApi + '/api/ideas' ,
        body:  {
              Body: idea
        },
        json: true,
        headers: {
            "Content-Type": "application/json",
            "User-Agent": "ideaApi"
        }
      };

      rp(options).then(function(parsedBody){
        console.log(parsedBody);
      }).catch(function(err){
        console.log(err);
      });
      
    });
  };