function logic2(you, date) {
  if (you <= 2 || date <= 2) {
    return 0;
  } else if (you >= 8 || date >= 8) {
    return 2;
  } else {
    return 1;
  }
}

let input1 = 5;
let input2 = 10;
console.log(logic2(input1, input2));
