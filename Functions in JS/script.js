// function functionName(param, param) {
//do some work
// }
// functionName(arg, arg); // call function

// function myfunction(msg) {
//   console.log("junaid");
//   console.log(msg);
// }
// myfunction("doing js");

// function sum(a, b) {
//   console.log(a + b);
// }
// sum(2, 3);
// return the value

// function sum(a, b) {
//   s = a + b;
//   return s;
// }
// let res = sum(4, 4);
// console.log(res);

//arrow function

// let mul = (a, b) => {

//   console.log(a * b);
// };
// mul(2, 3);

// let mul = (a, b) => {
//   m = a * b;
//   return m;
// };
// let res = mul(2, 6);
// console.log(res);

// Some More Array Methods
let arr = [1, 2, 3, 45, 45];
// arr.forEach((val) => {
//   console.log(val);
// });
let newarray = arr.filter((val) => {
  return val % 2 === 0;
});
console.log(newarray);
