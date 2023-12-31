function rollDice(noDoubles) {
  const die1 = Math.floor(Math.random() * 6) + 1; // Roll the first die
  let die2 = Math.floor(Math.random() * 6) + 1; // Roll the second die

  // Check for doubles when noDoubles is true
  if (noDoubles && die1 === die2) {
    die2 = (die2 % 6) + 1; // Increment one die, wrapping around to 1 if its value was 6
  }

  // Return the sum of the dice rolls
  return die1 + die2;
}

// Example usage:
const result1 = rollDice(false); // Without handling doubles
const result2 = rollDice(true); // With handling doubles

console.log(result1); // Output: Random sum of two dice rolls
console.log(result2); // Output: Random sum with handling doubles
