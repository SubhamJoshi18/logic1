function logic27(a, b, c) {
  if ((a !== b) !== c) {
    return 0;
  } else if (((a === b) === c) === a) {
    return 20;
  } else if (a && (b === 10) !== c) {
    return 10;
  }
}

let a1 = 1;
let a2 = 2;
let a3 = 3;
console.log(logic27(a1, a2, a3));
