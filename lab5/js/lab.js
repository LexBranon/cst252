// lab5.js - Data Types and Variables
// Author: Lexi Branon
// Created: February 12, 2021
// License: Public Domain


console.log("Data Types and Variables")


// Declare variables to hold the make, model, color, and year of your vehicle, example, var year = 2004
var make = "Chevy";
var model = "Spark";
var color = "darkblue";
var year = 2019;
var extras = "small, and cute";


// Declare a boolean variable ownIt for whether you own it or not.
var ownIt = true;

// Create a new variable age that subtracts the year from the current year
var age = new Date().getFullYear();

// Use document.writeln() to neatly output each of your variables, example, document.writeln("Make: " + make + "<br>");
document.writeln("Make: " + make + "<br>");
document.writeln("Model: " + model + "<br>");
document.writeln("Extras: " + extras + "<br>");
document.writeln("Year: " + year + "<br>");
document.writeln("Age: " + age + "<br>");

document.writeln("");
