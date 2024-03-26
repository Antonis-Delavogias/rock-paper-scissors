"use strict";

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissor"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  const playerLowChar = playerSelection.toLowerCase();
  const computerLowChar = computerSelection.toLowerCase();

  if (playerLowChar === computerLowChar) {
    return `It's a tie! ${
      playerLowChar[0].toUpperCase() + playerLowChar.slice(1)
    } versus ${computerLowChar}`;
  } else if (playerLowChar === "rock" && computerSelection === "Scissor") {
    return `You Win! Rock crashes Scissor`;
  } else if (playerLowChar === "rock" && computerSelection === "Paper") {
    return `You Lose! Paper covers rock`;
  } else if (playerLowChar === "paper" && computerSelection === "Rock") {
    return `You Win! Paper covers Rock`;
  } else if (playerLowChar === "paper" && computerSelection === "Scissor") {
    return `You Lose! Scissor cuts Paper`;
  } else if (playerLowChar === "scissor" && computerSelection === "Paper") {
    return `You Win! Scissor cuts paper`;
  } else if (playerLowChar === "scissor" && computerSelection === "Rock") {
    return `You Lose! Rock destroys scissor`;
  }
}

function playGame() {
  //Highscores
  let playerScore = 0;
  let computerScore = 0;

  //Creating a loop that will repeat and console log the result 5 times
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const userInput = String(
      prompt(`Choose between Rock, Paper and Scissor.. Let's play!`)
    );

    const result = playRound(userInput, computerSelection);
    console.log(result);

    if (result?.includes("Win")) {
      playerScore++;
    } else if (result?.includes("Lose")) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    return console.log(
      `You Won the game! Your score: ${playerScore} vs ${computerScore}`
    );
  } else if (playerScore === computerScore) {
    return console.log(
      `It's a tie. Your score: ${playerScore} vs ${computerScore}`
    );
  } else {
    return console.log(
      `You lost the game. Your score: ${playerScore} vs ${computerScore}`
    );
  }
}
playGame();
