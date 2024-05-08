let str = "junaid";
console.log(str);

// String Length

let lengthStr = str.length;
console.log(lengthStr);

// String Indices
console.log(str[0]);

// Template Literals in JS
// A way to have embedded expressions in strings
// `
// string text ${expression} string text`
// To create strings by doing substitution of placeholders
// `this is a template literal`

let specialstring = `this is a templatenliterals ${1 + 4}`;
console.log(specialstring);

// new line
console.log("juandi \n ali ");
//space tab
console.log("junaid \t ali");

// String Methods in JS
// These are built-in functions to manipulate a string

let strr = "junaid";
let apper = strr.toUpperCase();
console.log(apper);
let small = "JUNAID";
let smallcase = small.toLocaleLowerCase();
console.log(smallcase);

//trim
let trim = "   juniad   ";
let trimex = trim.trim();
console.log(trimex);

//slice
let slice = "junaid";
let sliceex = slice.slice(0, 3);
console.log(sliceex);

//concat
let str1 = "junaid";
let str2 = "ali";

let result = console.log(str1.concat(str2));

//replace
let replace = "junaid";
let repre = console.log(replace.replace("ju", "ka"));

let char = "junaid";
let resch = console.log(char.charAt(2));
