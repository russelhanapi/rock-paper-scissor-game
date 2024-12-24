let getComputerChoice = function () {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      console.log("Rock");
      break;
    case 1:
      console.log("Paper");
      break;
    case 2:
      console.log("Scissor");
      break;
  }
  return;
};

console.log(getComputerChoice());
