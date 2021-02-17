// lab6.js - Arrays and Objects
// Author: Lexi Branon
// Created: February 16, 2021
// License: Public Domain


console.log("Arrays and Objects")


myTransport = ["Honda CRV",  "Chevy Spark", "longboard"];

myMainRide = {
    make: "Chevy",
    model : "Spark",
    color : "grey",
    year : 2019,
    age : function() {
        return 2021 - this.year;
    }
}

document.writeln("Kinds of transportion I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
document.writeln("The age of my ", myMainRide.model, " is ", myMainRide.age(), " years.");
