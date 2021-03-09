// lab10.js - Functions
// Author: Lexi Branon
// Created: March 7, 2021
// License: Public Domain

//Borrow the sort() function or my anagram() function from Lab 7.
function randomizeName(userName) {
    var nameArray = userName.toLowerCase().split("");
    console.log("nameArray =", nameArray);
    var shuffledArray = shuffleArray(nameArray);
    console.log("shuffledArray =", shuffledArray);
    var shuffledString = shuffledArray.join("");
    var newName = toTitleCase(shuffledString);
    return newName;
}

// find the button element
buttonEl = document.getElementById("my-button");
console.log("button element:", buttonEl);
// find the form element
inputEl = document.getElementById("user-name");
console.log("input element:", inputEl);
// find output element
 var outputEl = document.getElementById("output");
console.log("output element:", outputEl);

//Attach an event listener to your button that does the following:
//Gets the value of your input field
//Runs that value through your sort() or anagram() function and saves the results.
//Replaces the html in <div id=output> with the results.
var buttonEl = document.getElementById("my-input");
console.log("My Input", inputEl);

var inputEl = document.getElementById("my-button");
console.log("My Button", buttonEl);

buttonEl.addEventListener("click", function (){
  var name = inputEl.value;
  var newName = toTitleCase(reorderUserName(userName));
  outputEl.innerHTML = "<p id=name-results>" + newName + "</p>";
})
