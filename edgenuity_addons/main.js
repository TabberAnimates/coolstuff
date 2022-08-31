// Adds Functions.js
var x = document.createElement("script");x.src="//tabberanimates.github.io/coolstuff/edgenuity_addons/functions.js"; 
void document.getElementsByTagName("body")[0].appendChild(x);

// Variables (Hope this code works :skull:)

const order = 'afterbegin';

// Button 1

const div2 = document.createElement('div'); 
div2.innerHTML = `<button onclick='skipTo()'>Skip to Part</button>`; 
document.body.insertAdjacentElement(order, div2);

// Button 2

const div = document.createElement('div'); 
div.innerHTML = `<button onclick="skipVid()">Skip Video</button>`; 
document.body.insertAdjacentElement(order, div);
