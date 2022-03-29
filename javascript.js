console.log("Hello there!")
const gameSymbols=["Rock","Paper","Scissors"]
 function computerPlay(){
     return gameSymbols[Math.floor(Math.random()*gameSymbols.length)]
 }
 console.log(computerPlay());