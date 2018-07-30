'use strict'

module.exports = class Listener {

    constructor(robot, matcher, callback){

      console.log("loading listener");

      this.robot = robot
      this.matcher = matcher
      this.callback = callback

      if(this.robot == null){
        throw new Error("You didn't give me a robot.")
      }

      if(this.matcher == null){
        throw new Error("You didn't give me a matcher.")
      }

      if(this.callback == null || typeof this.callback !== "function"){
        throw new Error("You didn't give me a callback.")
      }



    }


}
