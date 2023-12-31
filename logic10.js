function logic10(n) {
  if (n % 20 === 1 || n % 20 === 2) {
    return true;
  } else {
    return false;
  }
}

let input1 = 21;
console.log(logic10(input1));
