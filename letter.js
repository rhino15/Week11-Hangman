//letter.js should control whether or not a letter appears as a "_" or as itself on-screen.
function CheckBlanks(letterGuessed, chosenWord, arrayOfCorrectGuesses) {
	this.chosenWord = chosenWord;
	this.stringOfBlanks = "";
	this.arrayOfCorrectGuesses = arrayOfCorrectGuesses;

	this.createBlanks = function() {
		for (var i = 0; i < this.chosenWord; i++) {
			this.stringOfBlanks += "_";
		}
	};

	this.checkForLetterOrBlank = function(blankString) {
		
	};
}