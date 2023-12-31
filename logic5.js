function logic5(a, b) {
  let holdSum = a + b;
  if (holdSum >= 10 && holdSum <= 19) {
    return 20;
  } else {
    return a + b;
  }
}
let input1 = 3;
let input2 = 4;
console.log(logic5(input1, input2));
