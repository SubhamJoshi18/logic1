function logic29(a, b) {
  let a11 = Math.floor(a / 10);
  let a1 = a % 10;
  let b11 = Math.floor(b / 10);
  let b1 = b % 10;

  return a11 === b || a11 === b1 || a1 === b11 || a1 === b1;
}
const result1 = logic29(12, 23);
console.log(result1);
