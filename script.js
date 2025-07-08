console.log("Hello World");

function getComputerChoice() {
    let computerChoice = "";
    let randomized = Math.random() * 3;
    if (randomized <= 1) {
        computerChoice = "rock";
    }   else if (randomized <= 2) {
        computerChoice = "paper";
    }   else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Choose one below \n Rock, Paper or Scissors.").toLowerCase();
    return humanChoice;
}

let humanScore = 0;
let computerScore =0;

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