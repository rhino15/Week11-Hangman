//require the inquirer npm package
var inquirer = require('inquirer');
//require the constructor WordBank from game.js
var WordBank = require('./game.js');
//create a new instance of wordBank
var wordBank = new WordBank();
//require the constructor from word.js
var Word = require('./word.js');
//create a new instance of a random word from the word bank
var randomHangmanWord = new Word(wordBank.wordBank[Math.floor(Math.random() * wordBank.wordBank.length)]);
randomHangmanWord.getLetters();
console.log(randomHangmanWord.correctLettersGuessed);
console.log(randomHangmanWord.checkIfLetterFound('e'));
console.log(randomHangmanWord.correctLettersGuessed);
console.log(randomHangmanWord.wordRender());

//create word object here
var playHangman = function() {
	if (!randomHangmanWord.didWeFindTheWord()) {
		console.log("\nWelcome to Hangman\n");
		inquirer.prompt([{
			name
		}])
	}
}

