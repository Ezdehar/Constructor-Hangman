//This file CONTAINS the first CONSTRUCTOR, letter. 
//This constructor has to be able to either DISPLAY an underlying character or underscore, depending on whether or not
    //the user has guessed the letter. 

console.log("Letters loaded");
// constructor function for creating letter objects that contain properties.
//the letter objects can take actions but these are referred to as methods
function Letter(character, underscore, guess) {
    this.character = true;
    this.underscore = false;
    this.Guess = function() {
        if(this.character === true) {
            console.log("CORRECT!");
        }
        else if(this.underscore === false) {
            console.log("_");
        }
        if (err) {
            console.log(err);
          }        
    };
};
// //Prints out slightly different information about a letter based on their guess
this.printGuess = function() {
    console.log("\nCharacter: " + this.character + "\nUnderscore: " + this.underscore);
    console.log("\n_ _ _ _ _ _ _ _ _ _ _");

var answer = new Letter("C", "O", "D", "I", "N", "G", "B", "O", "O", "T", "C", "A", "M", "P");
answer.printGuess();

  // exporting our letter constructor
  module.exports = Letter;
};