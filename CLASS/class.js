//class
// class toyotaCar {
//     constructor(brand) {
//       this.brand = brand;
//       console.log("creating new object");
//     }
//     stop() {
//       console.log("car stop");
//     }
//     start() {
//       console.log("car start");
//     }
//   }
// creating object
//   let td = new toyotaCar("td");

//inheritance
// class person {
//   sleep() {
//     console.log("sleep");
//   }
//   eat() {
//     console.log("eat");
//   }
// }

// class engineer extends person {
//   work() {
//     console.log("work");
//   }
// }

// let amir = new engineer();

//super keyword

// class person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sleep() {
//     console.log("sleep");
//   }
// }
// class doctor extends person {
//   constructor(id, name, age) {
//     super(name, age);
//     this.id = id;
//   }
//   checkptient() {
//     console.log("doctor check the patient");
//   }
// }
// let doctor1 = new doctor("amir", "20", "2334");

// class person {
//   constructor(name, age, profession) {
//     this.name = name;
//     this.age = age;
//     this.profession = profession;
//   }
//   sleep() {
//     console.log("person sleep");
//   }
//   work() {
//     console.log("person work");
//   }
// }
// let person1 = new person("ali", "21", "student");
// GET ALL PROPERTIES OF AN OBJ
// allproert = () => {
//   let pro = [];
//   for (let allpro in person1) {
//     pro.push(allpro);
//   }
//   console.log(pro);
// };
// allproert();

// (() => {
//   let pro = [];
//   for (let allpro in person1) {
//     pro.push(allpro);
//   }
//   console.log(pro);
// })();
