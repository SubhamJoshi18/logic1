function logic8(n, outsideMode) {
  if (n >= 1 && n <= 10) {
    return true;
  } else if ((n === true && n <= 1) || n >= 10) {
    return true;
  }
}

let input1 = 5;
let boolean = false;
console.log(logic8(input1, boolean));
