function logic18(n) {
  if (n % 3 === 0) {
    return "Fizz!";
  } else if (n % 3 === 0) {
    return "Buzz!";
  } else if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz!";
  } else {
    return n + "!";
  }
}

let input1 = 3;
console.log(logic18(input1));
