// lab7.js - Functions
// Author: Lexi Branon
// Created: February 23, 2021
// License: Public Domain

// declare a variable userName and use window.prompt() to get the user's name from the user
function nameEntry() {
  var userName = window.prompt("Hi. What's your name?");
  document.writeIn("<style>:root {--textlen: " + userName.length + ";}</style>");
  var sortedName = sortUserName (userName);
  document.writeIn("Your name sorted:" + sortedName + "</br></br>");
  var randomName = randomizeName(userName);
    document.writeln("Your name randomized:<br>Do you like your new name?");
    document.writeln("<div class='name'>" + randomName + "</div
  }
