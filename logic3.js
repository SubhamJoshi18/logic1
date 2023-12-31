function logic3(temp, isSummer) {
  return (temp >= 60 && temp <= 90) || (temp <= 100 && isSummer);
}
let input1 = 90;
let boolean = false;
console.log(logic3(input1, boolean));
