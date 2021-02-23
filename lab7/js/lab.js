// lab7.js - Functions
// Author: Lexi Branon
// Created: February 23, 2021
// License: Public Domain

function nameEntry() {
    var userName = window.prompt("Hi. Nice to meet you! What's your name?");
    document.writeln("You said your name was: " + userName + "</br>");
    document.writeln("<style>:root {--textlen: " + userName.length + ";}</style>");
    var sortedName = sortUserName(userName);
    document.writeln("Let's mix it up: " + sortedName + "</br></br>");
    var randomName = randomizeName(userName);
    document.writeln("Your new name is: <br>");
    document.writeln("<div class='name'>" + randomName + "</div>")
}

nameEntry();

  function shuffleArray(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;


      while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;


          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
      }
      return array;
  }

  function toTitleCase(str) {
      return str.replace(
          /\w\S*/g,
          function(txt) {
              return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
      );
  }

  function sortUserName(userName) {
      return userName.toLowerCase().split("").sort().join("");
  }

  function randomizeName(userName) {
      var nameArray = userName.toLowerCase().split("");
      console.log("nameArray =", nameArray);
      var shuffledArray = shuffleArray(nameArray);
      console.log("shuffledArray =", shuffledArray);
      var shuffledString = shuffledArray.join("");
      var newName = toTitleCase(shuffledString);
      return newName;
  }
