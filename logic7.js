function love6(a, b) {
  if (a || (b === 6 && Math.abs(a + b)) || Math.abs(a - b) === 6) {
    return true;
  } else {
    false;
  }
}

let input1 = 6;
let input2 = 4;

console.log(love6(input1, input2));
