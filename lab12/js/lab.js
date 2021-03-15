// lab11.js - Functions
// Author: Lexi Branon
// Created: March 9, 2021
// License: Public Domain

//Create a "FizzBuzz" function similar to how we did in class.
//Loop through numbers 1 to 200, listing them as you go
//If the number is a multiple of 3, if should print "Fizz!"
//If the number is a multiple of 5, it should print "Buzz!"
//If the number is a multiple of 7, it should print "Boom!"
//If the number is a multiple of more than one 3, 5 or 7, it should combine
//Fizz, Buzz, and Boom. For example, if the number is a multiple of 3 AND 5
//it should print "FizzBuzz!" and so on.

for (i=1; i<= 200; i++){
  if (i%15 == 0) {
    console.log("FizzBuzz!");
} else if (i%21 == 0) {
    console.log("FizzBoom!");
} else if (i%35 == 0) {
    console.log("BuzzBoom!");
} else if (i%3 == 0){
    console.log("Fizz!");
} else if (i%5 == 0) {
    console.log("Buzz!");
} else if (i%7 == 0) {
    console.log("Boom!");
  }
}


str += "Fizz";
var newEl = document.createElement("p");
newEl.innerHTML = str;
document.getElementById("output").appendChild(newEl);


function outputToPage(str) {
    newEl = document.createElement("p");
    newEl.innerHTML = str;
    outputEl.appendChild(newEl);
}
