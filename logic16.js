function logic16(tea, candy) {
  if (tea && candy >= 5) {
    return 1;
  } else if (tea || candy >= 5 * 5) {
    return;
  } else if (tea || candy <= 5) {
    return 0;
  }
}
let input1 = 6;
let input2 = 8;
console.log(logic16(input1, input2));
