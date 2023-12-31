function logic17(str) {
  if (str.charAt(0) === "f") {
    return "Fizz";
  } else if (str.substring(str.length - 1) === "b") {
    return "Buzz";
  } else if (str.substring(0) === str.substring(str.length - 1)) {
    return str;
  }
}
let input1 = "fig";
console.log(logic17(input1));
