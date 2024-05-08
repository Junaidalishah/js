// loops
// const numbers = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
// we used for of loop for array also
// let result = [];
// for (const number of numbers) {
//   console.log(number);
//   console.log(number * 2);
//   result.push(number * 2);
// }
// console.log(result);

// const double = (numbers) => {
//   let result = [];
//   for (const number of numbers) {
//     result.push(number * 2);
//   }
//   return result;
// };
// console.log(double([6, 7, 8, 9]));
// let sum = 0;
// for (let i = 1; i < 5; i++) {
//   sum += i;
// }
// console.log(sum);

//while loop
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }
// do while loop
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 7);

// for-of loop
// let size = 0;
// let str = "junaid";
// for (let i of str) {
//   console.log(i);
//   size++;
// }
// console.log(size);

// for-in loop
// const number = [1, 2, 3, 4, 5];
// for (let val in number) {
//   console.log(val);
// }
let student = {
  name: "Junaid",
  age: "23",
};
for (let val in student) {
  console.log(val, student[val]);
}
