//! 7. Javascript program for Fibonacci series

let number = 10; //parseInt(prompt("Enter a positive number"));
let num1 = 0,
  num2 = 1,
  nextTerm;
// nextTerm = num1 + num2;

// while (nextTerm <= number) {
//   console.log(nextTerm);
//   num1 = num2; //3
//   num2 = nextTerm; //5
//   nextTerm = num1 + num2; //8
// }


// !sequence of fibonacci series

if (number<=0) {
  console.log('not valid');
}
else if (number==1) {
  console.log(num1);
}
else {
  let count = 0;
  while (count < number) {
    console.log(num1);
      nextTerm = num1 + num2;
      num1 = num2;
    num2 = nextTerm;
    count++;
//     while (nextTerm <= number) {
//       console.log(nextTerm);
//       num1 = num2; //3
//       num2 = nextTerm; //5
//       nextTerm = num1 + num2; //8
//       count++;
  }
}


// !sum of fibonacci series
// function sum() {
//   let number = parseInt(prompt("Enter a positive number"));
//   let num1 = 0,
//     num2 = 1,
//     nextTerm;
//   if (number == 0) {
//     // console.log('enter the number greater than 0');
//     return 0;
//   } else if (number == 1) {
//     // console.log(num2);
//     return num2;
//   } else {
//     let sum = 0;
//     for (let i = 1; number > i; i++) {
//       nextTerm = num1 + num2;
//       num1 = num2;
//       num2 = nextTerm;
//       return num2;
//     }
//   }
// }
// console.log(sum());