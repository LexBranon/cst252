// lab.js - Functions
// Author: Lexi Branon
// Created: April, 2021
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


// Controls the game play
        //class hangman {
          // initialize
        //  constructor(name1, name2) {
              // set up the board
            //  this.board = new Board();
              // set up the players
            //  this.player1 = new Player(name1, 1, this.board);
            //  this.player2 = new Player(name2, 2, this.board);
              // assign the starting player
            //  this.current_player = this.player1;
        //  }
          // start play method
        //  play() {
              // loop infinitely
            //  while(true) {
                  // call the board rendering method]
                //  this.board.render();
                  // ask for coordinates from the current player
                //  current_player.get_coordinates();
        // and so on...
