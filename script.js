"use strict";

const gameChoices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
