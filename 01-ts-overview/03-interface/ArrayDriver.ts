import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let arrCoach: Coach[] = [];

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

arrCoach.push(myCricketCoach);
arrCoach.push(myGolfCoach);

for (let coach of arrCoach) {
    console.log(coach.getDailyWorkout());
    console.log();
}
