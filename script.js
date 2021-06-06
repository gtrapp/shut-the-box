"use strict";

const tileEl = document.querySelectorAll(".tile");
const diceEl1 = document.getElementById("dice--1");
const diceEl2 = document.getElementById("dice--2");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector('.btn--new');

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

let tileNumber;
let tileSum;

tileEl.forEach(function(btn) {
  btn.addEventListener('click', function() {
    this.classList.add('tile--active');
    
    tileNumber = this.textContent;
    let tileInt = parseInt(tileNumber);
    console.log(tileInt);
    console.log(typeof tileInt);
 
  });
});


// Starting conditions
const init = function () {
    diceEl1.classList.add('hidden');
    diceEl2.classList.add('hidden');
  };
  init();

btnNew.addEventListener('click', init);

