//word.js should contain all of the methods which will check the letters guessed versus the random word selected.
var Letter = require('./letter.js');

function Word(randomWord) {
	this.randomWord = randomWord;
	this.correctLettersGuessed = [];
	this.found = false;

	this.getLetters = function() {
		for (var i = 0; i < this.randomWord.length; i++) {
			var letterConstructor = new Letter(this.randomWord[i]);
			this.correctLettersGuessed.push(letterConstructor);
		}
		//console.log(this.correctLettersGuessed);
		/*if (this.didWeFindTheWord()) {
			return true;
		} else {
			return false;
		}*/
		
	};

	this.didWeFindTheWord = function() {
		if (this.checkIfLetterFound() === this.randomWord.length) {
			this.found = true;
		} 
		return this.found;
	};

	this.checkIfLetterFound = function(guessLetter) {
		var whatToReturn = 0;
		for (var i = 0; i < this.correctLettersGuessed.length; i++) {
			if (this.correctLettersGuessed[i].letterGuessed === guessLetter) {
				this.correctLettersGuessed[i].appear = true;
				whatToReturn++;
			}
		}
		return whatToReturn;
	};

	this.wordRender = function() {
		var str = "";
		for (var i = 0; i < this.correctLettersGuessed.length; i++) {
			
			if (this.checkIfLetterFound(this.correctLettersGuessed[i]).appear) {
				console.log(this.correctLettersGuessed[i].letterRender());
				str += this.correctLettersGuessed[i].letterGuessed;
			} else {
				str += "_ ";
			}
		}
		return str;
	};
}

module.exports = Word;