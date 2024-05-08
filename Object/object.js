// object;
// const student = {
//   name: "junaid",
//   class: "4th",
//   printName: function () {
//     console.log("name", this.name);
//   },
//   students: ["ali", "amir", "virat"],
// };
// student.students[1] = "asim";
// console.log(student.students[1]);

// alert("the name of student is " + student.name);

//add property
// student.name = "ali";
// student.age = "20";

//add method
// student.printdetail = function () {
//   console.log("name", this.name);
// };

// DELETE A PROPERTY
// delete student.name;
// delete student.printName;

//prototypes
// const employee = {
//   claTax() {
//     console.log("the tax rate is 10%");
//   },
// };
// const amir = {
//   salary: 50000,
// };
// amir.__proto__ = employee;

// Checking for properties and methods

// student = {
//   name: "Junaid",
//   age: "20",
//   printname: function () {
//     console.log("my anme is juanid");
//   },
// };
// const doesname = "printname" in student;
// console.log(doesname);

// GET ALL PROPERTIES OF AN OBJ

// function getlallpro() {
//   let prop = [];
//   for (let letsingleprop in student) {
//     prop.push(letsingleprop);
//   }
//   console.log(prop);
// }
// getlallpro();

// hasOwnProperty

// Student.prototype.marks = 99;
// for (let singleProperty in Nimra) {
//   if (Nimra.hasOwnProperty(singleProperty)) {
//     console.log(singleProperty);
//   }
// }
