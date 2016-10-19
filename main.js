// require prompt to use to make the game 
var inquirer = require('inquirer');

var prompt = require('prompt');
//require the objects/exports you will use
var importWordsFromGameJS = require('./game.js');

var lives = 8;

function checkRound {
	console.log("");
	console.log("");

// if user has no more lives

	if (lives <= 0) {
		console.log("#####################");
		console.log("_________");
		console.log("|       |");
		console.log("|       O");
		console.log("|      /|l");
		console.log("|       A ");
		console.log("|      J L  ");
		console.log("|");
		console.log("|");
		console.log("Game Over -- Yer Doomed!");
		console.log("#####################");
		// exit game
		process.exit();
}
	if(lives > 0) {
		console.log("#####################");
		console.log("Victory! You lived to tell the tale!");
		// exit game
		process.exit();
	}

	playRound();
}

function playRound() {
// prompt.start();
inquirer.prompt([
		{
				type:"confirm",
				name:"ready",
				message: "Welcome to Game of Thrones Hangman Game. Are you ready to play?",
		},
		{
				type: "input",
				name: "name",
				message: "State your name, Your Highness: ",

		},
		{
			type: "input",
			name: "letter",
			message: "Guess a letter!",
		}
		]).then(function(answer){
			console.log("Welcome " + answer.name);

})
game = {
    wordArray: [],
    wordUArray: [],
    lives: 8,
    wordBankLength: importWordsFromGameJS.game.list.length,
    word: "test",
    wordU: " ",
    pullWord: function() {
        word = importWordsFromGameJS.game.list[(Math.floor(Math.random() * this.wordBankLength))]
    },
    setUnderline: function() {
        this.pullWord();
        for (var i = 0; i < word.length; i++) {
            this.wordArray[i] = word.charAt(i);
            this.wordUArray[i] = " _ ";
            // console.log(this.wordArray);
            // console.log(this.wordUArray);
            // console.log(importWordsFromGameJS.game.list[i]);
        }
        this.wordU = this.wordUArray.join("");
        console.log("This word has " + this.wordUArray.length + " letters. Type letter to guess: " + this.wordU);
    },
    updateLetter: function(letter) {
        this.changes = 0;
        for (i = 0; i < word.length; i++) {
            this.wordArray[i] = this.word.charAt(i);

            if (this.word.charAt(i) == letter) {
                this.changes += 1;
            }
        }

        if (this.changes < 1) {
            this.lives -= 1;
            console.log(this.lives);
        }
        this.wordU = this.wordUArray.join("");
        console.log(this.wordU);

        word1 = this.wordArray.join("");
        word2 = this.wordUArray.join("");

        if (word1 == word2) {
        	console.log("Victory!");
        	// restart game here
        }
        if(lives < 1) {
        	console.log("No more turns :( " + word1);
        	// restart game here
        }

    }

}
}
// pulls a random word from the word bank
game.pullWord();
game.setUnderline();

// game = {
//     wordBank: // create or import a list of words
//     wordsWon: // count of words Found
//     guessesRemaining: 10, //per word
//     currentWrd: null, //the word object
//     startGame: function(wrd) {
//         //make sure the user has 10 guesses
//         guessesRemaining: 10
//         //get a random word from the array

//         //populate currentWrd (made from Word constructor function) object with letters
//         this.keepPromptingUser();

//     },
//     resetGuessesRemaining: function() {
//         // reset guess count for new game	
//     },
//     keepPromptingUser: function() {
//         var self = this;

//         prompt.get(['guessLetter'], function(err, result) {
//             // result is an object like this: { guessLetter: 'f' }
//             // console.log(result);
//             // console log the letetr you chose

//             //this checks if the letter was found and if it is then it sets that specific letter in the word to be found

//             //if the user guessed incorrectly minus the number of guesses they have left
//             // and console.log if they were incorrect or correct

//             //check if you win only when you are right
//             //end game


//             // display the user how many guesses remaining

//             // render the word

//             // display letters the user has guessed

//             // if user has remaining guesses and Word isn't found

//             // if user has no guesses left, show them the word and tell them they lost

//             // else show the user word and rendered

//         });
//     }


// };

// game.startGame();
