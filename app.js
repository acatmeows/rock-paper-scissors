/* GLOBALS */
// Wins
let wins = 0;
// Losses
let losses = 0;
// Ties
let ties = 0;

/* ----------- PLAY GAME ----------- */

// Play the game
let playGame = (playerChoice) => {
    // Make a var for computer's choice
    let compChoice;
    // Computer chooses based on random num
    switch (Math.floor(Math.random() * 3 + 1))
    {
        case 1: 
            compChoice = "rock";
            break;
        case 2: 
            compChoice = "paper";
            break;
        case 3: 
            compChoice = "scissors";
            break;
    }
    // Compare the choices
    compareChoices(playerChoice, compChoice);
    // Write the player choice
    if (playerChoice == "rock") {
        document.getElementById("player").innerHTML = "🪨";
    }
    if (playerChoice == "paper") {
        document.getElementById("player").innerHTML = "🧾";
    }
    if (playerChoice == "scissors") {
        document.getElementById("player").innerHTML = "✂️";
    }
    // Write the computer choice
    if (compChoice == "rock") {
        document.getElementById("comp").innerHTML = "🪨";
    }
    if (compChoice == "paper") {
        document.getElementById("comp").innerHTML = "🧾";
    }
    if (compChoice == "scissors") {
        document.getElementById("comp").innerHTML = "✂️";
    }
    // Put the equals sign back in the battle
    document.getElementById("equals").innerHTML = "&nbsp;=&nbsp;";
}
// Compare player and computer choices
let compareChoices = (playerChoice, compChoice) => {
    // Check if it's a tie
    if (playerChoice == compChoice) {
        document.getElementById("results").innerHTML = "Tie";
        incTies();
    }
    // And if it's not...
    else {
        // Compare the choices
        if (playerChoice == "rock" && compChoice == "scissors") {
            // Write the results in the HTML
            document.getElementById("results").innerHTML = "Win!";
            // Change the score
            incWins();
        }
        if (playerChoice == "rock" && compChoice == "paper") {
            document.getElementById("results").innerHTML = "Lose";
            incLosses();
        }
        if (playerChoice == "paper" && compChoice == "scissors") {
            document.getElementById("results").innerHTML = "Lose";
            incLosses();
        }
        if (playerChoice == "paper" && compChoice == "rock") {
            document.getElementById("results").innerHTML = "Win!";
            incWins();
        }
        if (playerChoice == "scissors" && compChoice == "paper") {
            document.getElementById("results").innerHTML = "Win!";
            incWins();
        }
        if (playerChoice == "scissors" && compChoice == "rock") {
            document.getElementById("results").innerHTML = "Lose";
            incLosses();
        }
    }
    updateScores();
}

/* ----------- KEEPING SCORE ----------- */

/* RESET SCORES */
let resetScores = () => {
    wins = 0;
    losses = 0;
    ties = 0;
    updateScores();
    // And UI elements
    document.getElementById("player").innerHTML = "";
    document.getElementById("comp").innerHTML = "";
    document.getElementById("results").innerHTML = "";
    document.getElementById("equals").innerHTML = "";
}

/* UPDATE SCORES */
let updateScores = () => {
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("ties").innerHTML = ties;
}

/* SCORE COUNTERS */
// Increment wins
let incWins = () => {
    wins++;
}
// Increment Losses
let incLosses = () => {
    losses++;
}
// Increment Ties
let incTies = () => {
    ties++;
}