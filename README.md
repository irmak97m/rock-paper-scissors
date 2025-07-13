# rock-paper-scissors
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
 
// First version down below
// I only use getbotChoice() again
----------------------------------
console.log("Hello World");

function getBotChoice() {
    let computerChoice = "";
    let randomized = Math.random() * 3;
    if (randomized <= 1) {
        computerChoice = "Rock";
    }   else if (randomized <= 2) {
        computerChoice = "Paper";
    }   else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Choose one below \n Rock, Paper or Scissors.").toLowerCase();
    return humanChoice;
}

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

function playGame() {
    for(i=0;i<5;i++) {
        playRound();
    }
    console.log(`Final Result\nYou ${humanScore}\nComputer ${computerScore}`);
    humanScore = 0;
    computerScore = 0;
    if(confirm("Do you want to play one more time ?")) {
        playGame();
    } else {console.log("Thank You! Bye :)")}
}

playGame();
----------------------------------