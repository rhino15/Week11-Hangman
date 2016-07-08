//require the inquirer npm package
var inquirer = require('inquirer');
//require the constructor WordBank from game.js
var WordBank = require('./game.js');
//create a new instance of wordBank
var wordBank = new WordBank();
//require the constructor from word.js
var Word = require('./word.js');
//number of guesses user has
var numGuessesRemaining = 10;
//create a new instance of a random word from the word bank
var randomHangmanWord = new Word(wordBank.wordBank[Math.floor(Math.random() * wordBank.wordBank.length)]);
//populate all the user guesses in this array
var userGuesses = [];
//populate correctLettersGuessed array
randomHangmanWord.getLetters();

var playHangman = function() {
	
	if (numGuessesRemaining > 0 && randomHangmanWord.found === false) {

		console.log("\nWelcome to Hangman\n");
		console.log("You have " + numGuessesRemaining + " guesses left.");
		console.log(randomHangmanWord.wordRender() + '\n');

		inquirer.prompt([{
			type: 'text',
			name: 'letterGuessed',
			message: "Pick a letter to solve Hangman.",
		}]).then(function(answers) {

			userGuesses.push(answers.letterGuessed);
			var findHowManyOfUserGuess = randomHangmanWord.checkIfLetterFound(answers.letterGuessed);
			console.log(randomHangmanWord.wordRender());

			if (findHowManyOfUserGuess === 0) {
				console.log("You guessed wrong!\n");
				numGuessesRemaining--;
			} else {
				console.log("You guessed right!!!");
				if (randomHangmanWord.didWeFindTheWord()) {
					console.log("You won!!!");
					return;
				}
			}
			console.log("You have " + numGuessesRemaining + " guesses.");
			console.log(randomHangmanWord.wordRender());
			console.log("Here are the letters already guessed: " + userGuesses.join(", "));
			playHangman();
		})
	} else {
		console.log("Sorry, better luck next time.\n");
		var showWord = "";
		for (var i = 0; i < randomHangmanWord.correctLettersGuessed.length; i++) {
			showWord += randomHangmanWord.correctLettersGuessed[i].letterGuessed;
		}
		console.log("The band was " + showWord);
	}
}

playHangman();

