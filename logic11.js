function logic11(n) {
  if (n % 3 === 0 || n % 5 === 0) {
    return true;
  } else if (n % 3 === 0 && n % 5 === 0) {
    return false;
  } else {
    return null;
  }
}

let input1 = 10;
console.log(logic11(input1));
