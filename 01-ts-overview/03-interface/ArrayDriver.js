"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
var arrCoach = [];
var myCricketCoach = new CricketCoach_1.CricketCoach();
var myGolfCoach = new GolfCoach_1.GolfCoach();
arrCoach.push(myCricketCoach);
arrCoach.push(myGolfCoach);
for (var _i = 0, arrCoach_1 = arrCoach; _i < arrCoach_1.length; _i++) {
    var coach = arrCoach_1[_i];
    console.log(coach.getDailyWorkout());
    console.log();
}
//# sourceMappingURL=ArrayDriver.js.map