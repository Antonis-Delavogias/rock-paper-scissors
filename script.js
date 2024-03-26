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
    return `You lose! Paper covers rock`;
  } else if (playerLowChar === "paper" && computerSelection === "Rock") {
    return `You Win! Paper covers Rock`;
  } else if (playerLowChar === "paper" && computerSelection === "Scissor") {
    return `You lose! Scissor cuts Paper`;
  } else if (playerLowChar === "scissor" && computerSelection === "Paper") {
    return `You Win! Scissor cuts paper`;
  } else if (playerLowChar === "scissor" && computerSelection === "Rock") {
    return `You lose! Rock destroys scissor`;
  }
}

const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
