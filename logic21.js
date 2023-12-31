function logic21(a, b, c, equalOk) {
  if (equalOk) {
    return a <= b && b <= c;
  } else {
    return a < b && b < c;
  }
}

const result1 = logic21(2, 5, 11, false);
console.log(result1);
