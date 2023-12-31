function logic12(n) {
  return (n + 1) % 20 === 0 || (n + 2) % 20 === 0;
}

let input1 = 18;
console.log(logic12(input1));
