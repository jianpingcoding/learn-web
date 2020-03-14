// Finding HTML Elements
var idEl = document.getElementById("demo"); //  finds the element with id='demo':
var pEls = document.getElementsByTagName("p"); // finds all <p> elements
var centerEls = document.getElementsByClassName("center"); //returns a list of all elements with class='center'.

var selectorEl = document.querySelector("#test"); 
var selectorEls = document.querySelectorAll("p.center"); // returns a list of all <p> elements with class='center'.

// Traversing the DOM
// Root Nodes
document.head;
document.body; 
// Parent Nodes
p.parentNode;
// Child Nodes
element.childNodes[0].nodeName;  // return  H1
element.firstChild.nodeValue; //
element.firstChild.nodeType; // return 1
element.firstElementChild.style.background = 'purple';
document.body.children[3].lastElementChild.style.background = 'pink';
burger.nextElementSibling.style.background = 'orange';
burger.previousElementSibling.style.background = 'green';

// Creating New Nodes
const paragraph = document.createElement('p');
paragraph.textContent = "I'm a paragraph!";
paragraph.innerHTML = "I'm a <strong>bold</strong> paragraph!";
const text = document.createTextNode("I'm a text node!");
list.appendChild(newItem);
parentNode.insertBefore(newNode, nextSibling);
parentNode.replaceChild(newNode, oldNode);

// Removing Nodes from the DOM
list.removeChild(list.lastElementChild);
list.children[2].remove();

// Modifying Attributes, Classes, and Styles in the DOM
const image = document.querySelector('img');
image.hasAttribute('src');       // true
image.getAttribute('src');       // returns the src link
image.removeAttribute('src');    // removes the src
image.setAttribute('src', 'https://res.cloudinary.com/trobes/image/upload/c_scale,w_400/v1549941322/after.png');

// Modifying Classes
const activeDiv = document.querySelector('.active');
activeDiv.classList.add('hidden');   
activeDiv.classList.remove('hidden');
activeDiv.classList.toggle('hidden');
activeDiv.classList.replace('active', 'alert');

// Modifying Styles
const div = document.querySelector('div');
div.style.borderRadius = '50%';
div.style.backgroundColor = 'lightgreen';
div.style.fontSize = '30px';

