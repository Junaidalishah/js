// DOM manipulation
// selecting with id
// let heading = document.getElementById("heading");
// console.log(heading);
// console.dir(heading);
//
// selcting with class
// let para = document.getElementsByClassName("para");
// console.dir(para);
// console.log(para);
//
// selcting by tag name
// let tagName = document.getElementsByTagName("h3");
// console.log(tagName);
// console.dir(tagName);
//
// Query selctor
// let firstEl = document.querySelector("p");
// console.dir(firstEl);
// let elements = document.querySelectorAll("p");
// console.dir(elements);
//
// Properties
// TagName
// let firstEl = document.querySelector("P");
// let TagName = console.log(firstEl.tagName);

//first child
// let div = document.querySelector("div");
// console.log(div.firstElementChild);
// console.log(div.firstChild);

//innerText
// let div = document.querySelector("div");
// let h1 = document.querySelector("h1");
// h1.innerText = "my name is khan";
// console.log(h1.innerText);

//innrHTML   add new node
// let div = document.querySelector("div");
// div.innerHTML = "<p>this is monnth of ramadan </p>";
// console.log(div.innerHTML);

// textContent same as like inner text but it also show hidden text
// let div = document.querySelector("div");
// let h1 = document.querySelector("h1");
// h1.textContent = "my name is ali shah";
// console.log(div);
// console.log(div.textContent);

//attributes

// CHECK WHETHER AN ATTRIBUTE EXISTS OR NOT
// let div = document.querySelector("div");
// let hasattri = div.hasAttribute("id");
// console.log(hasattri);

// get attribute
// let div = document.querySelector("div");
// console.log(div);
// let id = div.getAttribute("id");
// console.log(id);

// Set attribute
// console.log(div.setAttribute("id", "123"));
// console.log(div);

//STYLE attribute
// div.style.backgroundColor = "yellow";
// console.log(div);
// div.style.fontSize = "200px";
// div.innerText = "hello";
// div.style.visibility = "hidden";

//insert  add element
// let newBtn = document.createElement("button");
// newBtn.innerText = "clickME";

//append mean add at the last
//append add to the last
// div.append(newBtn);

//prepend mean at the top
// div.prepend(newBtn);

//before mean just before of the node
// div.before(newBtn);

//after just after the node
// div.after(newBtn);

// let div = document.querySelector("div");
// let p = document.createElement("p");
// p.innerText = "this is new paras"
// div.appendChild(p); //add at the last
// console.log(div);

//difference  between appendChild and append is that appendChild take takes a single node as its argument , while append() method can be used with multiple

//wihout touching html node and to the body new node is like that:
// let newheading = document.createElement("h1");
// newheading.innerText = "i am new heading without occur of  html i create";
// document.querySelector("body").before(newheading);

// delete node
// let div = document.querySelector("div");
// div.remove();

//counting elements
// let p = document.querySelectorAll("p").length;
// console.log(p);
