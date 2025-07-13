console.log("Hello World");

/**
 * startGameBtn initialize the game 
 * startGameBtn.textContent = "Game Started !"
 * choiceButton will be enabled
 * Within the loop botChoice and humanChoice will determined.
 * Winner of the round gets 1 point added to theirs
 * In every round all ...Out const output the current value except for the winnerOut
 * This loop will continue untill either humanScore or botScore reaches to 5 points
 * When the game ends startGameBtn.textContent = "One More Game ?" 
 * After the game starts text will change to startGameBtn.textContent = " Start Again !"
 */


/** getBotChoice() results at test count of 100.000.000  
 * 
 * rock:33334338
 * rock:33327797
 * rock:33333600
 * 
 * paper:33329883
 * paper:33328471
 * paper:33338456
 * 
 * scissors:33335779
 * scissors:33343732
 * scissors:33327944
 * 
 */

const startGameBtn = document.querySelector("#start");
const choiceButton = document.querySelectorAll("#buttons > button");
const messageOut = document.querySelector("#message");
const winnerOut = document.querySelector("#winner");
const botChoiceOut = document.querySelector("#computersChoice");
const humanChoiceOut = document.querySelector("#humanChoice");
const botScoreOut = document.querySelector("#computersScore");
const humanScoreOut = document.querySelector("#humanScore");
const choiceColor = document.querySelector("#choice");
const scoreColor = document.querySelector("#score");

let humanScore = 0;
let botScore = 0;
let humanChoice = "";
let botChoice = "";
let gameEndCheck;

function resetValues(){ 
    botScore = 0;
    humanScore = 0;
    humanChoice = "";
    botChoice = "";
    gameEndCheck = false;
}

function resetHtml() {
    humanScoreOut.textContent = "";
    botScoreOut.textContent = "";
    botChoiceOut.textContent = "";
    humanChoiceOut.textContent = "";
    messageOut.textContent = "";
    winnerOut.textContent = "";
    winnerOut.style.visibility = "hidden";
    winnerOut.style.color = "black";
    choiceColor.lastElementChild.style.color = "black";
    choiceColor.firstElementChild.style.color = "black";
    scoreColor.firstElementChild.style.color = "black";
    scoreColor.lastElementChild.style.color = "black";
}

function getBotChoice () {
    let botChoice = "";
    let randomized = Math.floor(Math.random() * 3+1); // returns 1,2 or 3 
    switch (randomized) {
        case 1:
            botChoice = "Rock";
            break;
        case 2:
            botChoice = "Paper";
            break;
        case 3:
            botChoice = "Scissors";
            break;
    }
    return botChoice;
}

function playRound () {
    
    // winner decision
    if(botChoice == humanChoice) {
        msg = `Draw !`;
        // coloring while playrounds
        choiceColor.lastElementChild.style.color = "black";
        choiceColor.firstElementChild.style.color = "black";
    } else if ((humanChoice == "Rock" && botChoice == "Scissors") || humanChoice == "Paper" && botChoice == "Rock" || humanChoice == "Scissors" && botChoice == "Paper") {
        humanScore += 1;
        // coloring while playrounds
        choiceColor.lastElementChild.style.color = "green";
        choiceColor.firstElementChild.style.color = "red";
        msg = `${humanChoice} Beats ${botChoice}\n\nYou win this round !`;
    } else {
        botScore += 1;
        // coloring while playrounds
        choiceColor.lastElementChild.style.color = "red";
        choiceColor.firstElementChild.style.color = "green";
        msg = `${humanChoice} Loses ${botChoice}\n\nYou lost this round !`;
    };

    //html and console output
    humanScoreOut.textContent = ":" + humanScore;
    botScoreOut.textContent = ":" + botScore;
    botChoiceOut.textContent = ":" + botChoice;
    humanChoiceOut.textContent = ":" + humanChoice;
    messageOut.textContent = msg;
    console.log(msg);

    //coloring the scores
    if (humanScore == botScore) {
        scoreColor.firstElementChild.style.color = "black";
        scoreColor.lastElementChild.style.color = "black";
    } else if (humanScore > botScore) {
        scoreColor.firstElementChild.style.color = "red";
        scoreColor.lastElementChild.style.color = "green";
    } else {
        scoreColor.firstElementChild.style.color = "green";
        scoreColor.lastElementChild.style.color = "red";
    };

    // game ends here
    gameEndCheck = (humanScore == 5 || botScore == 5);
    if(gameEndCheck == true) {
        choiceButton.forEach(btn => btn.disabled = true)
        startGameBtn.textContent = "One More Game ?";
        winnerOut.style.visibility ="visible";
        if (humanScore == 5) {
            winnerOut.style.color = "green";
            winnerOut.textContent = "Congratulations! You Win the Game!";
        } else if (botScore == 5){
            winnerOut.style.color = "red";
            winnerOut.textContent = "No worries, You will win the next game :)";
        };
    };
};


startGameBtn.addEventListener("click",() => {
    startGameBtn.textContent = "Game Started !";
    choiceButton.forEach((btn) => btn.disabled = false);
    console.clear();    //cleaning the console
    resetValues();      //resetting the values
    resetHtml();        //resetting the html file
});

choiceButton.forEach((btn) => {
    btn.addEventListener("click", () => {
        humanChoice = btn.id;
        botChoice = getBotChoice();
        playRound();
    });
});




/* we dont neet to prompt because we put a button for humanChoice
function getHumanChoice() {
    let humanChoice = prompt("Choose one below \n Rock, Paper or Scissors.").toLowerCase();
    return humanChoice;
}
*/

/* i did more basic playRound function
function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    if(humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
        console.log(`Your Choice is ${humanChoice} \nComputers choice is ${computerChoice}`)
        if (humanChoice == "rock") {
            if(computerChoice == "rock") {
                console.log("No Winners, Draw!")
            } else if (computerChoice == "paper") {
                console.log("You lose! Paper beats Rock.")
                computerScore = computerScore + 1;
            } else {
                console.log("You Win! Rock beats Scissors")
                humanScore = humanScore + 1;
            }
        } else if (humanChoice == "paper") {
            if(computerChoice == "rock") {
                console.log("You win! Paper beats Rock")
                humanScore = humanScore + 1;
            } else if (computerChoice == "paper") {
                console.log("No Winners, Draw!")
            } else {
                console.log("You Lose! Scissors beats Paper")
                computerScore = computerScore + 1;
            }
        } else if (humanChoice == "scissors") {
            if(computerChoice == "rock") {
                console.log("You lose! Rock beats Scissors")
                computerScore = computerScore + 1;
            } else if (computerChoice == "paper") {
                console.log("No Winners, Draw!")
                humanScore = humanScore + 1;
            } else {
                console.log("No Winners, Draw!")
            }
        }
        
    } else {
        //alert("Invalid Choice! Try Again");
        console.log("Invalid Choice! Try Again");
        i = i - 1;
    }
    console.log(`Your Score is ${humanScore}\nComputer's score is ${computerScore}`);
}
*/
