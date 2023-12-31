function logic4(speed, isBirthday) {
  if (speed <= 60 && isBirthday) {
    return 0; //No ticket
  } else if (speed >= 60 && speed <= 80 && isBirthday) {
    return 1; //Small Ticket;
  } else if (speed >= 81) {
    return 2;
  } else if (isBirthday) {
    return speed + 5;
  }
}
let input1 = 65;
let boolean = true;
console.log(logic4(input1, boolean));
