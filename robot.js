var Listener = require("./listener");
var glob = require( 'glob' ), path = require( 'path' );

module.exports = class robot {

  constructor(){
    this.listeners =[];
  }

  hear (regex, callback) {
    this.listeners.push(new Listener(this, regex, callback))
  }

  respond (regex, options, callback) {
    this.hear(this.respondPattern(regex), options, callback)
  }

  respondPattern (pattern) {
      return new RegExp( pattern, 'i');
  }

  loadAllTheScripts(){
    console.log("loading scripts");

    var robot = this;

    glob.sync( './scripts/*.js' ).forEach( function( file ) {
      console.log(file);
      require(file)(robot);
    });
  }

  print(){
    console.log("just checking");
  }

  processMessage(message){
    console.log("processing Message");
    console.log("listeners: " + this.listeners);

    this.listeners.forEach(function(listener){
      console.log("testing listeners");
      if(listener.matcher.test(message)){
        console.log("run callback");
        listener.callback(listener.matcher.exec(message));
      }
      else
      {
          console.log("no match on "+ listener.matcher);
      }
    });
  }
};
