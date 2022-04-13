const gameSymbols = ["Rock", "Paper", "Scissors"]

var win = 0;
var lose = 0;
var draw = 0;




//                      Computer selection random                   ///
function computerPlay() {
    return gameSymbols[Math.floor(Math.random() * gameSymbols.length)]
}


//                      Click funtion start game                    ///
const selectClick = document.querySelectorAll('.selections');
selectClick.forEach(key => key.addEventListener('click', function (e) {
    inPlayerSelection = e.target.id
    game()
    

}))




//                      single round play                           //
function singleRound(playerSelection, computerSelection) {
    playerSelection = inPlayerSelection;
    computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        // console.log(playerSelection + " and " + computerSelection + " draw");
        return draw++
    } else if (playerSelection === "Rock" & computerSelection === "Scissors" || playerSelection === "Paper" & computerSelection === "Rock" || playerSelection === "Scissors" & computerSelection === "Paper") {
        // console.log(playerSelection + " beats " + computerSelection);
        return win++
    } else if (playerSelection === "Rock" & computerSelection === "Paper" || playerSelection === "Paper" & computerSelection === "Scissors" || playerSelection === "Scissors" & computerSelection === "Rock") {
        // console.log(computerSelection + " beats " + playerSelection);
        return lose++
    } else {
        console.log("Something went wrong!")
    }

}
//                      Final game function                     ///
function game() {
    singleRound()
    if(win===5 || lose===5){
        if (win>lose){
            console.log("You win")
            document.getElementById('result').innerHTML = "You win !"
            let ask=confirm("You win , play again ?")
            if(ask===true){
                location.reload()
            }else{
                document.getElementById('result').innerHTML = "Game end!"
                location.reload()
            }
        }else{
            console.log("You lost try again")
        document.getElementById('result').innerHTML = "You lose !"}
        let ask=confirm("You lost, play again ?")
            if(ask===true){
                location.reload()
            }else{
                document.getElementById('result').innerHTML = "Game end!"
                location.reload()
            }
    }
    document.getElementById('win').innerHTML = win
    document.getElementById('draw').innerHTML = draw
    document.getElementById('lose').innerHTML = lose
}





