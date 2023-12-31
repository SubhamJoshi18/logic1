function logic15(isMorning, isMom, isAsleep) {
  return isMorning && isMom && isAsleep;
}

let morning = false;
let mom = false;
let asleep = false;
console.log(logic15(morning, mom, asleep));
