function logic2(day, vacation) {
  if (day === 1 || 2 || 3 || 4 || (5 && !vacation)) {
    return "7:00";
  } else if (day === 0 || (6 && !vacation)) {
    return "10:00";
  }
}

let input1 = 1;
let boolean = false;
console.log(logic2(input1, boolean));
