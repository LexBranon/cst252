//Put a comment block at the top of your program
// lab7.js - Functions
// Author: Lexi Branon
// Created: March 2, 2021
// License: Public Domain


//Use getElementById() to find your output <div> and assign it to a variable outputEl
var targetEl = document.getElementById("output");

//Create a new element with document.createElement("p") and assign it to a variable new1El
var new1El = document.createElement("button");

//Change the html attribute of new1El to say something new.
new1El.innerHTML = "I'm A New Button!";

//Create another new element and assign it to a variable new2El
var new2El = document.createElement("button");

//Change the html attribute of new2El to say something else.
new2El.innerHTML = "I'm Another New Button...";

//Append both new elements one at a time using appendChild()
targetEl.appendChild(new1El)
  <button> I am a new button </button>

targetEl.appendChild(new2El)
  <button> I am anither new button </button>

//Change the css attributes of at least two elements of your page
new1El.style.backgroundColor = "green";
new1El.style.color = "white";

new2El.style.backgroundColor = "white";
new2El.style.color = "green";
