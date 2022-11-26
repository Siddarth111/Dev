//! 8. Find number is ArmStrong number or not

let sum = 0;

const number = Number(prompt("Enter a positive integer: "));
let temp = number;
const power = number.length;

// while (temp > 0) {
//   let remainder = temp % 10;
//   sum += remainder * remainder * remainder;
//   temp = parseInt(temp / 10);
// }

while (temp > 0) {
  let rem = temp % 10;
  sum += rem ** power;
  temp = parseInt(temp / 10);
}
// if (sum == number) {
//   console.log(`${number} is an Armstrong number`);
// } else {
//   console.log(`${number} is not an Armstrong number.`);
// }

(sum == number)
  ? console.log(`${number} is an Armstrong number`)
  : console.log(`${number} is not an Armstrong number.`);

