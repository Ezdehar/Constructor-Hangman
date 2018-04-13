//This file CONTAINS the first CONSTRUCTOR, letter. 
//This constructor has to be able to either DISPLAY an underlying character or underscore, depending on whether or not
    //the user has guessed the letter. 

console.log("Letters loaded");
// constructor function for creating letter objects
var Letter = function(user, guess, character, underscore) {
    this.user = user;
    this.character = character;
    this.underscore = underscore;
    this.guess = guess;
  };

  var theLetter = new Letter();
  console.log("theLetter.constructor is " + theLetter.constructor);
  
  // Prints out slightly different information about a letter based on their guess
  this.readGuess = function() {
  
      var guess = "";
  
      if (this.character === "") {
         guess = "";
      }
      else {
        guess = "";
      }
      this.printGuess = function() {
          console.log("User: " + this.user + "\nGuess: " + this.guess +
          "\nCharacter: " + this.character + "/n_ _ _ _ _ _ _ _");
    };
  }
  
  
  
  // exporting our letter constructor
  module.exports = Letter;