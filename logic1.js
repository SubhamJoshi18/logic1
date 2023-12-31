function logic1(cigars, isWeekend) {
  return cigars >= 40 && cigars <= 60 && !isWeekend;
}

let input1 = 30;
let boolean = false;

console.log(logic1(input1, boolean));
