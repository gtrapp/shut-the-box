"use strict";

const tileEl = document.querySelector(".tile");
const diceEl1 = document.getElementById("dice--1");
const diceEl2 = document.getElementById("dice--2");
const btnRoll = document.querySelector(".btn--roll");

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1. Generating a random dice roll
  const dice1 = Math.trunc(Math.random() * 6) + 1;
  const dice2 = Math.trunc(Math.random() * 6) + 1;

  //2. Display dice
  diceEl1.classList.remove("hidden");
  diceEl2.classList.remove("hidden");
  diceEl1.src = `dice-${dice1}.png`;
  diceEl2.src = `dice-${dice2}.png`;

let diceTotal = dice1 + dice2;

console.log(diceTotal);

});


tileEl.addEventListener('click', function () {
    console.log("tile clicked");
    console.log(this); 
    //player0El.classList.add('player--active');
});



