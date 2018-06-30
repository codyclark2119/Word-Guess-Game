var guess = [];
var correctLetters = [];
var wordKey = ["victis", "origins", "dempsey", "takeo", "richtophen",
"nikolai", "maxis", "primis", "ultimis", "monty", "shadowman"];
var wins = [];
var remainingGuess = ["10"];
var losses = [];
var guessedLetters = [];
var i = wordKey[Math.floor(Math.random()*wordKey.length)];

//word splitter
var wordSplit = i.split("");
console.log(wordSplit);
console.log(i);



//letter guess function
document.onkeyup = function userGuess(event) {
    guess = event.key;
    wordCheck();
    winLoss();
}

//wordcheck function
function wordCheck() {
    for (var x = 0; x < wordSplit.length; x++) {
        if (guess === wordSplit[x]) {
            correctLetters[x] = guess;
            console.log(correctLetters);
        }
        
        else if (wordSplit.indexOf(guess) === -1) {
            guessedLetters[x] = guess;
            remainingGuess--;
            console.log(guessedLetters);
        }

    }
    
    document.getElementById("wrongletter").innerHTML = "Wrong Guesses: " + guessedLetters.join(" ");
    document.getElementById("guessesremaining").innerHTML = "Guesses Remaining: " + remainingGuess;
    document.getElementById("correct").innerHTML = "Correct Guesses: " + correctLetters.join(" ");
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
        
}

function winLoss() {
    for (y = 0; y < wordSplit.length; y++)
        if (correctLetters === wordSplit && remainingGuess > 0) {
            wins++;
        }
        else if (remainingGuess === 0) {
            losses++;
        }
}

