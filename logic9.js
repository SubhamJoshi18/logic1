function logic9(n) {
  if (n % 11 === 0 || (n - 1) % 11 === 0) {
    return true;
  } else {
    return false;
  }
}

let input1 = 22;
console.log(logic9(input1));
