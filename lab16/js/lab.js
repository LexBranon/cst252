// lab.js - Functions
// Author: Lexi Branon
// Created: March 23, 2021
// License: Public Domain

function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.school = "Hogwarts";
}
Person.prototype.language = "English";
Person.prototype.name = function() {
        return(this.firstName + " " + this.lastName);
};

var bike = new Vehicle("Schwinn", "LeToure", 1974, "gold", "Brooks saddle");

// we add text (including <p> tags to the end of our output div
document.getElementById("output").innerHTML += "<p>" + bike.info() + "</p>";
