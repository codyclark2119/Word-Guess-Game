var wordKey = [
{word: "victis", fact: "Group of surviors surviving in 2025 after the destruction of earth by Dr.Maxis" },
{word: "origins", fact: "The true starting point of the cycle" },
{word: "dempsey", fact: "Hard headed American" },
{word: "takeo", fact: "A strong willed Japanese man" },
{word: "richtophen", fact: "An evil German scientist" },
{word: "nikolai", fact: "The alcholic broken hearted Russian" },
{word: "maxis", fact: "Head of Group 935" },
{word: "primis", fact: "A new dimensional version of the beloved crew" },
{word: "ultimis", fact: "The original WW2 crew that annihilated the current of space/time" },
{word: "monty", fact: "God. Well, not actually but in a way kinda." },
{word: "shadowman", fact: "The leader of the Apothicons" },
];

function wordRun() {
    var generateWord = Math.floor(Math.random() * wordKey.length)
    var currentWord = wordKey.splice(generateWord, 1)[0];
    return currentWord;
}

var guessedLetters = [];
var guess = "";
var correctLetters = "";
var wins = 0;
var losses = 0;
var remainingGuess = 0;
var guessesLeft = 5;
var wordSplit = [];
var currentWord;


var displayHint = document.getElementById("hint")
var displayWord = document.getElementById("correct");
var winCount = document.getElementById("wins");
var lossCount = document.getElementById("losses");
var wrongCount = document.getElementById("guessesremaining");


function runAgain() {
    guessedLetters = [];
    correctLetters = "";
    currentWord = wordRun();
    hint = currentWord.fact;
    console.log(currentWord);

    remainingGuess = 0;
    winCount.textContent = "Wins: " + wins;
    lossCount.textContent = "Losses: " + losses;
    wrongCount.textContent = "Guesses Left: " + guessesLeft;
    displayHint.textContent = "Hint: " + hint;


    for (i = 0; i < currentWord.word.length; i++) {
        if (currentWord.word.charAt(i) !== " ") {
            correctLetters += "_";
            remainingGuess += 1;
        }
        else {
            correctLetters += " ";
        }
    }
    displayWord.textContent =  "Correct Letters: " + correctLetters;
}


//letter guess function
document.onkeyup = function userGuess(event) {
    console.log(event.key);

    for (var i = 0; i < guessedLetters.length; i++) {
        if(guessedLetters[i] === event.key) {
            alert("You've already guessed this.")
        }
    }

    guessedLetters.push(event.key);

    var templet = "";
    var correctGuess = false;

    for (var i = 0; i < currentWord.word.length; i++) {
        console.log(currentWord.word.charAt(i).toUpperCase());
        if (currentWord.word.charAt(i) === event.key) {
            templet += currentWord.word.charAt(i);
            remainingGuess--;
            correctGuess = true;
        }
        else {
            templet += correctLetters.charAt(i)
        }
    }

    

    if (correctGuess === false) {
        guessesLeft--;
        wrongCount.textContent = "Guesses Left: " + guessesLeft;
            if (guessesLeft === 0) {
                losses++;
                alert("YOU LOSE");
            }
    }
    else {
        alert("Correct!");
    }

    correctLetters = templet;
    displayWord.textContent = "Correct Letters: " + correctLetters;

    if (remainingGuess === 0) {
        wins++;
        guessesLeft = 5;
        alert("You Win! The word was: "+ currentWord.word);
        runAgain();
    }
}

runAgain();