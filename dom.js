// TRAVERSING THE DOM
var itemList = document.querySelector("#items");
// parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "#f4f4f4"; // change the background color items id
console.log(itemList.parentNode.parentNode.parentNode); // return the body

// PARENT ELEMENT

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "#4f4f4f"; // change the background color items id
console.log(itemList.parentElement); // return the body

// child nodes
console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[2]);
itemList.children[1].style.backgroundColor = "yellow";

// FirstChild
console.log(itemList.firstChild);

// First Element Child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello 1";

// lastChild
console.log(itemList.lastChild);

// last Element Child
console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Hello 4";

// nextSibling
console.log(itemList.nextSibling);

// nextElementSibling
console.log(itemList.nextElementSibling);

// PREVIOuSSIBLING
console.log(itemList.previousSibling);

// NEXTELEMENTSIBLING
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "green";

// // CREATE ELEMENT

// // CREATE A DIV
var newDiv = document.createElement("div");
// add class
newDiv.className = "hello";
// id class
newDiv.id = "hello1";
// add attribute
newDiv.setAttribute("title", "Hello Div");
// create a text node
var newDivText = document.createTextNode("Hello World");
// add text to div
newDiv.appendChild(newDivText);
var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");
console.log(newDiv);
container.insertBefore(newDiv, h1);

// // CREATE A DIV
var newDiv = document.createElement("div");
// add class
newDiv.className = "hello";
// id class
newDiv.id = "hello1";
// add attribute
newDiv.setAttribute("title", "Hello Div");
// create a text node
var newDivText = document.createTextNode("Hello World");
// add text to div
newDiv.appendChild(newDivText);
var container = document.querySelector("ul .cin");
var h1 = document.querySelector("ul h1");
console.log(newDiv);
container.insertBefore(newDiv, h1);
