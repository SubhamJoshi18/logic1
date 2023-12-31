function logic20(a, b, c, bOk) {
  if (b > a && c > b && !bOk) {
    return true;
  } else if (bOk === true && a === b && c > b) {
    return true;
  }
}
let input1 = 1;
let input2 = 2;
let input3 = 4;
let boolean = false;
console.log(logic20(input1, input2, input3));
