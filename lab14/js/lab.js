// lab.js - Functions
// Author: Lexi Branon
// Created: March 23, 2021
// License: Public Domain

function Vehicle(make, model, year, color, extras) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.extras = extras;
    this.info = function() {
      return(this.make + " " + this.model + " " + this.year + " " + this.color + " " + this.extras);
    }
}

var vehicles =[];

var car = new Vehicle("Chevy", "Spark", 2019, "grey", "small and cute");
var bike = new Vehicle("Schwinn", "LeToure", 1974, "gold", "Brooks saddle");


// we add text (including <p> tags to the end of our output div
document.getElementById("output").innerHTML += "<p>" + bike.info() + "</p>" + "<p>" + car.info() + "</p>";
