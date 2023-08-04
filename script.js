let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let gamePlay

function computerChoice(){
  function randInt(max){
      let arr = ["rock", "paper", "scissors"];
      let generatedNumber = Math.floor(Math.random()*max);
      // console.log(arr[generatedNumber]);

      if (generatedNumber == 0){
          return "rock";
  
      } else if( generatedNumber == 1){
          return "paper";
         

      } else if(generatedNumber == 2){
          return "scissors"; 
          

      }
      

  }
  
  return randInt(3);
}

function play(playerSelection,computerSelection){
    
  if(playerSelection === computerSelection){
      return "Tie"
  }
  else if(playerSelection === "rock" && computerSelection === "paper"){
      return "You Loose!";
  }
  else if(playerSelection === "paper" && computerSelection === "scissors"){
      return "You Loose!";
  }
  else if(playerSelection === "scissors" && computerSelection === "rock"){
      return "You Loose!";
  }
  else if(playerSelection != "scissors" && playerSelection != "rock" && playerSelection != "paper" ){
      return "Invalid!"
  }
  else{
      return "You Won!";
  }
}

function score(play){
    
  if(play == "You Won!"){
      playerScore++;
      userinp.value = playerScore.toString();
      
      
  }
  else if(play == "You Loose!"){
      computerScore++;
      compinp.value = computerScore.toString();
      
      
  }

  if (playerScore === 5 || computerScore===5){
    endGame();
  }
  
}

function endGame(){
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;

}



document.getElementById("userinp").readOnly = true;
document.getElementById("compinp").readOnly = true;
document.getElementById("resultBox").readOnly = true;

const userinp = document.getElementById("userinp");
const compinp = document.getElementById("compinp");
const resultBox = document.getElementById("resultBox");

userinp.value = playerScore.toString();
userinp.style.textAlign = "center";
userinp.style.fontSize = "40px";

compinp.value = computerScore.toString();
compinp.style.textAlign = "center";
compinp.style.fontSize = "40px";


resultBox.style.textAlign = "center";
resultBox.style.fontSize = "40px";

const rock = document.querySelector("#rock");
rock.addEventListener('click' , () =>{
  playerSelection = "rock";
  console.log("player:"+ playerSelection);
  computerSelection = computerChoice();
  console.log("comp:"+ computerSelection);
  gamePlay = play(playerSelection,computerSelection);
  score(gamePlay);
  resultBox.value = gamePlay;
})

const paper = document.querySelector("#paper");
paper.addEventListener('click' , () =>{
  playerSelection = "paper";
  console.log("player:"+ playerSelection);
  computerSelection = computerChoice();
  console.log("comp:"+ computerSelection);
  gamePlay = play(playerSelection,computerSelection);
  score(gamePlay);
  resultBox.value = gamePlay;
})

const scissors = document.querySelector("#scissors");
scissors.addEventListener('click' , () =>{
  playerSelection = "scissors";
  console.log("player:"+ playerSelection);
  computerSelection = computerChoice();
  console.log("comp:"+ computerSelection);
  gamePlay = play(playerSelection,computerSelection);
  score(gamePlay);
  resultBox.value = gamePlay;
})

