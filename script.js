"use strict";

const tileEl = document.querySelectorAll(".tile");
const diceEl1 = document.getElementById("dice--1");
const diceEl2 = document.getElementById("dice--2");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");

let diceSum, tileInt, tileSum, diceState, tileState;

// Starting conditions
const init = function () {
  diceSum = 0;
  tileInt = 0;
  tileSum = 0;
  diceState = true;
  tileState = false;
  diceEl1.classList.add("hidden");
  diceEl2.classList.add("hidden");
  for (let i = 0; i < tileEl.length; i++) {
    tileEl[i].classList.remove("tile--active");
  }
};
init();

//Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (diceState) {
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

    diceState = false;

    for (let i = 0; i < tileEl.length; i++) {
      //tileEl[i].('tile--active');
      // if (tileEl[i].classList.('tile--active')) {
      //     tileEl[i].textContent = "";
      // }
    }
    tileState = true;
    tileSelect();
  }
});

const tileSelect = function () {
if(tileState) {
  tileEl.forEach(function (btn) {
    btn.addEventListener("click", function () {
      console.log(diceState);
      this.classList.add("tile--active");
      let tileNumber = this.textContent;
      tileInt = parseInt(tileNumber);
      tileSum += tileInt;
      tileCheck(tileSum);
    });
  });
}
};

const tileCheck = function (tilesum) {
  console.log("Tile Sum = " + tileSum);

  if (tilesum < diceSum) {
    tileSelect();
    console.log("Choose another tile.");
    // rollDice = true;
  } else if (tilesum == diceSum) { 
    tileState = false;
    console.log("TileSum = DiceSum");
  } else {
    console.log("You've gone over");
    // for (let i = 0; i < tileEl.length; i++) {
    //   tileEl[i].classList.remove("tile--active");
    // }
  }
};

btnNew.addEventListener("click", init);
