//word.js should contain all of the methods which will check the letters guessed versus the random word selected.

function CheckWord(letterGuessed, randomWord) {
	this.letterGuessed = letterGuessed;
	this.randomWord = randomWord;
	this.correctGuessArr = [];
	this.noDuplicatesArr = [];

	this.checkGuess = function() {
		for (var i = 0; i < this.randomWord.length; i++) {
			if (this.letterGuessed === this.randomWord.charAt(i)) {
				this.correctGuessArr.push(this.letterGuessed);
				return true;
			} else {
				return false;
			}
		}
	};
	//ween
	this.noDuplicates = function() {
		for (var i = 0; i < this.correctGuessArr.length - 1; i++) {
			if (this.noDuplicatesArr.indexOf(this.correctGuessArr[i]) === -1) {
				this.noDuplicatesArr.push(this.correctGuessArr[i]);
			}	
		}
	};

	this.clearArray = function() {
		while (this.correctGuessArr.length > 0) {
			this.correctGuessArr.pop();
		}
	};
}