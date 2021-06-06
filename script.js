"use strict";

const tileEl = document.querySelectorAll(".tile");
const diceEl1 = document.getElementById("dice--1");
const diceEl2 = document.getElementById("dice--2");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector('.btn--new');

let diceSum = 0;
let tileInt = 0;
let tileSum = 0;

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

diceSum = dice1 + dice2;

console.log(diceSum);

});



tileEl.forEach(function(btn) {
  btn.addEventListener('click', function() {
    this.classList.add('tile--active');
    
    let tileNumber = this.textContent;
    tileInt = parseInt(tileNumber);
    tileSum += tileInt;
    console.log("Tile Sum = " + tileSum);
  
    tileCheck(tileSum);

  });
});

const tileCheck = function(tilesum) {
  if (tilesum == diceSum) {
    console.log("It's a match!");
  }else {
    console.log("it's not a match");
  }
}




// Starting conditions
const init = function () {
    diceEl1.classList.add('hidden');
    diceEl2.classList.add('hidden');
  };
  init();

btnNew.addEventListener('click', init);

