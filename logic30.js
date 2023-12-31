function logic30(a, b) {
  function convert(num) {
    return String(num).length;
  }

  const sum = a + b;
  const digitInA = convert(a);
  const digitInsum = convert(sum);

  if (digitInA === digitInsum) {
    return a + b;
  } else {
    return a;
  }
}

const input1 = 2;
const input2 = 3;
console.log(logic30(input1, input2));
