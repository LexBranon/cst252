// lab10.js - Functions
// Author: Lexi Branon
// Created: March 7, 2021
// License: Public Domain

//Borrow the sort() function or my anagram() function from Lab 7.
function sortingHat(name) {
   var len = name.length;
   console.log("length:", len);

   var mod = len % 4;
   console.log("mod:", mod");

   if(mod == 0) {
     return("Gryffindor");
   } else if (mod == 1){
     return("Ravenclaw");
   } else if (mod == 2){
     return("Syltherine");
   } else {
     return("Hufflepuff");
   }
}


// find the button element
//var myButton = document.getElementById("button");
// get value from input field
// var name = document.getElementById("input").value;
 var name = document.getElementById("text");
//get outputEl
 //var outputEl = document.getElementById("output");
//console.log("output element:", outputEl);
//call sorting house
var sortHouse = sortingHat(name);
console.log(sortHouse);


//Create an event listener attached to #button
//that gets the value of #input and assigns it to a variable name
//runs sortingHat(name) and stores the result in a variable house
//appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
var myButton = document.getElementById("button");

myButton.addEventListener("click", function (){
//  var name = inputEl.value;
  var name = document.getElementById("input").value;
  console.log("name", )
  var house = sortingHat(name);
  newText = "<p> Congrats! Your House is... </p>"  + house;
document.getElementById("output").innerHTML = newText;
})
