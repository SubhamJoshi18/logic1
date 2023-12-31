function logic14(a, b) {
  let teen = Math.abs(a + b);
  if (teen >= 13 && teen <= 19) {
  } else {
    return Math.abs(a + b);
  }
}

let input1 = 3;
let input2 = 4;
console.log(logic14(input1, input2));
