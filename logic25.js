function logic25(a, b) {
  if (a % 5 === b % 5) {
    return Math.min(a, b);
  } else if (a === b) {
    return 0;
  }

  return Math.max(a, b);
}

let input1 = 2;
let input2 = 3;
console.log(logic25(input1, input2));
