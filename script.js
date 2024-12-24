const computerScore = 0;
const humanScore = 0;

let getComputerChoice = function () {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) return "Rock";
  else if (random === 1) return "Paper";
  else return "Scissors";
};

let getHumanChoice = function () {
  let userInput = prompt("What's your pick? [Rock/Paper/Scissor]");
  return userInput;
};
