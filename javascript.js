console.log("Hello there!")
const gameSymbols = ["Rock", "Paper", "Scissors"]
function computerPlay() {
    return gameSymbols[Math.floor(Math.random() * gameSymbols.length)]
}

var win=0;
var lose=0;

function singleRound(playerSelection, computerSelection) {
    var playerSelection = prompt("Enter Rock, Paper or Scissors");
    computerSelection = computerPlay();
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        alert(playerSelection + " and " + computerSelection + " draw try again!");
        
    } else if (playerSelection.toLowerCase() === "rock" & computerSelection === "Scissors" || playerSelection.toLowerCase() === "paper" & computerSelection === "Rock" || playerSelection.toLowerCase() === "scissors" & computerSelection === "Paper") {
        alert("You win ! " + playerSelection + " beats " + computerSelection);
        return win++
    } else if (playerSelection.toLowerCase() === "rock" & computerSelection === "Paper" || playerSelection.toLowerCase() === "paper" & computerSelection === "Scissors" || playerSelection.toLowerCase() === "scissors" & computerSelection === "Rock") {
        alert("You lose ! " + computerSelection + " beats " + playerSelection);
        return lose++
    } else {
        alert("You did not enter Rock, Paper or Scissors")
    }
}

function game(){
    for (let i = 0; i<5; ){
        singleRound()
        console.log("You win "+win+" times and computer win "+lose+" times")
        i=win+lose
        console.log(i)
    }
    if(win>lose){
        alert ("you win this game!")
    }else if(win<lose){
        alert ("you lost try again next time")
    }else{
        alert("its a draw")
    }
    win=0;
    lose=0;
}



