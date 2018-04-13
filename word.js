//CONTAINS the second contructor, WORD, which depends on the LETTER CONSTRUCTOR
//Using this file to create an OBJECT REPRESENTING the current word the user is attempting to guess
//This file will be used by index.js to store the word


var letter = require("./letter");

var fs = require("fs");

//An array of new Letter objects representing the letters of the underlying word
//function that returns a string representing a word
//function that takes a character as an argument