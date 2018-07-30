module.exports = function (robot) {
  console.log("load test script");

  robot.respond('test(.*) this', function (msg) {
    var value = msg[1];
    console.log('hit the test file ' + value);

  });
};
