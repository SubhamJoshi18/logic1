function string23(a, b, c) {
  return (
    Math.abs(a - b) >= 10 || Math.abs(b - c) >= 10 || Math.abs(a - c) >= 10
  );
}

let a1 = 1;
let a2 = 7;
let a3 = 10;
console.log(string23(a1, a2, a3));
