//this file will contain the logic for the course of the game, which depends on words.js
//this file will RANDOMLY select a word and uses the WORD CONSTRUCTOR to store it
//this file will PROMPT the user for each guess and KEEPS TRACK of the users remaining guess
require('dotenv').config();

var word = require("./word");


Letter.prototype.toString = function(character, underscore, guess) {
    this.character = character;
    this.underscore = underscore;
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

// //Prints out slightly different information about a letter based on their guess
this.printGuess = function() {
    console.log("\nCharacter: " + this.character + "\nUnderscore: " + this.underscore);
    console.log("\n_ _ _ _ _ _ _ _ _ _ _");

    var answer = new Letter("C", "O", "D", "I", "N", "G", "B", "O", "O", "T", "C", "A", "M", "P");
    
    answer.printGuess();
    };
    };
};