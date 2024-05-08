// GET URL

// const whereiam = window.location.href;
// console.log(whereiam);
//set url

// window.length.href = "https://www.w3schools.com/";

// domain name

// const domainName = window.location.hostname;
// console.log(domainName);
// const url = new URL("https://www.w3schools.com/");
// const domain = url.hostname;
// console.log(domain);

// browser reload button
// function reloadthepage() {
//   window.location.reload();
// }
let button = document.getElementById("btn");
button.addEventListener("click", () => {
  location.reload();
});

let forwadd = document.getElementById("Forwad");
let back = document.getElementById("back");

forwadd.addEventListener("click", () => {
  history.forward();
});
back.addEventListener("click", () => {
  history.back();
});
