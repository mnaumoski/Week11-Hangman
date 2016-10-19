// require prompt to use to make the game 
var inquirer = require('inquirer');

var prompt = require('prompt');
//require the objects/exports you will use
var importWordsFromGameJS = require('./game.js');

var lives = 8;

function checkRound() {
    console.log("");
    console.log("");

    // if user has no more lives

    if (lives <= 0) {
        console.log("#####################");
        console.log("_________");
        console.log("|       |");
        console.log("|       0");
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
    if (lives > 0) {
        console.log("#####################");
        console.log("Victory! You lived to tell the tale!");
        // exit game
        process.exit();
    }

    playFirstRound();
}

function playFirstRound() {
    // prompt.start();
    inquirer.prompt([{
        type: "confirm",
        name: "ready",
        message: "Welcome to Game of Thrones Hangman Game. Are you ready to play?",
    }, {
        type: "input",
        name: "name",
        message: "State your name, Your Highness: ",

    }]).then(function(answer) {
        console.log("#####################");
        console.log("Welcome " + answer.name);
        console.log("You decided to play a Hangman game")
        console.log("#####################");
        console.log("Your man sure looks happy now!");
        console.log(" O")
        console.log("/|l");
        console.log(" A ");
        console.log("J L ");
        console.log("#####################");
        console.log("But not for long?")
        console.log("__________");
        console.log("||========");
        console.log("||");
        console.log("||");
        console.log("||");
        console.log("||");
        playRound();
    });
}



function playRound(letter) {
    console.log("You will be getting a word soon!");
    inquirer.prompt([{
            type: "input",
            name: "letter",
            message: "Type to Guess a letter (a-z)!",

        }]).then(function(answer) {
                console.log("You selected the letter " + answer.letter);

                game = {
                        wordArray: [],
                        wordUArray: [],
                        wordBankLength: importWordsFromGameJS.game.list.length,
                        word: "test",
                        wordU: " ",
                        pullWord: function() {
                            word = importWordsFromGameJS.game.list[(Math.floor(Math.random() * this.wordBankLength))]
                                // console.log(word);
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
                            console.log("This word has " + this.wordUArray.length + " letters. " + this.wordU);
                        },
                        // updateLetter();

                        updateLetter: function(answer) {

                            changes = 0;
                            for (i = 0; i < word.length; i++) {
                                this.wordArray[i] = this.word.charAt(i);

                                if (this.word.charAt(i) == this.answer.name) {
                                    this.changes += 1;
                                    console.log("im jere");
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
                            if (lives < 1) {
                                console.log("No more turns :( " + word1);
                                // restart game here
                            }
                        }

                    }
                    // pulls a random word from the word bank
                game.pullWord();
                game.setUnderline();
                game.updateLetter();
            });

      };
            playFirstRound();
            // playRound();
