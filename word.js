//word.js should contain all of the methods which will check the letters guessed versus the random word selected.

function CheckWord(letterGuessed, randomWord) {
	this.letterGuessed = letterGuessed;
	this.randomWord = randomWord;
	this.correctGuessArr = [];
	this.incorrectGuessArr = [];
	this.noDuplicatesArr = [];


	this.checkCorrectGuess = function() {
		for (var i = 0; i < this.randomWord.length; i++) {
			if (this.letterGuessed === this.randomWord.charAt(i)) {
				this.correctGuessArr.push(this.letterGuessed);
				return true;
			} else {
				this.incorrectGuessArr.push(this.letterGuessed);
				return false;
			}
		}
	};
	//ween
	this.noDuplicatesCorrectArr = function() {
		for (var i = 0; i < this.correctGuessArr.length; i++) {
			if (this.noDuplicatesArr.indexOf(this.correctGuessArr[i]) === -1) {
				this.noDuplicatesArr.push(this.correctGuessArr[i]);
			}	
		}
	};

	this.noDuplicatesIncorrectArr = function() {
		for (var i = 0; i < this.incorrectGuessArr.length; i++) {
			if (this.noDuplicatesArr.indexOf(this.incorrectGuessArr[i]) === -1) {
				this.noDuplicatesArr.push(this.incorrectGuessArr[i]);
			}
		}
	};

	this.clearArray = function() {
		while (this.correctGuessArr.length > 0) {
			this.correctGuessArr.pop();
		}
	};
}