/*//let myName = 'Marija';

//alert(myName);

//document.getElementById('episodes').innerHTML = 'Explore episodes';
//document.getElementById('episodes').style.backgroundColor = 'pink';


let myElement = document.getElementById('episodes');

myElement.classList.add('coolepisodes');
//myElement.classList.remove('someotherclass');


// Create element
let myNewElement = document.createElement('h2');
document.getElementById('episodes').appendChild(myNewElement);

// Add text to element
myNewElement.innerHTML = 'Hello h2';
document.getElementById('episodes').appendChild(myNewElement);


// FUNCTIONS

function sayHello() {
    alert('Hello');
    alert('Hi');
}

sayHello();


// Function that creates an element and append it to another element
function addElement() {
    let myNewElement = document.createElement('h2');
    myNewElement.innerHTML = 'Hello h2';

    document.getElementById('episodes').appendChild(myNewElement);
}

addElement();

//EventListener
let button = document.getElementById('button');
button.addEventListener('click', addElement);


function clickButton() {
    alert('Button clicked');
}
*/
var mobileMenuBtn = document.querySelector("#mobile-menu-btn");
var mobileMenu = document.querySelector(".mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "flex";
    mobileMenuBtn.innerHTML = "Close";
  } else {
    mobileMenu.style.display = "none";
    mobileMenuBtn.innerHTML = "Menu";
  }
});