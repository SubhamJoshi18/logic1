function logic26(a, b, c) {
  if (a && b && c === 2) {
    return 10;
  } else if ((a === b) === c) {
    return 5;
  } else if (a !== b && c) {
    return 1;
  } else {
    return 0;
  }
}

let a1 = 2;
let a2 = 2;
let a3 = 2;
console.log(logic26(a1, a2, a3));
