function logic28(a, b, c) {
  const first = Math.abs(a + b);
  const second = Math.abs(b + c);
  const third = Math.abs(c + a);
  if (first || second || third === 10) {
    return 10;
  } else if (first >= 10) {
    return 5;
  } else {
    return 0;
  }
}

let a1 = 9;
let a2 = 1;
let a3 = 0;
console.log(logic28(a1, a2, a3));
