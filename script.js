"use strict";

const tileEl = document.querySelectorAll(".tile");
const diceEl1 = document.getElementById("dice--1");
const diceEl2 = document.getElementById("dice--2");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const hints = document.getElementById("message");

let diceSum = 0;
let tileInt = 0;
let tileSum = 0;

// Starting conditions / New Game
const init = function () {
  diceEl1.classList.add("hidden");
  diceEl2.classList.add("hidden");
  enableDiceRoll();
};
init();

btnRoll.addEventListener("click", function () {
  if (btnRoll.classList.contains("disable")) return;
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
  // disable roll dice reset tile sum
  tileSum = 0;

  // for (let i = 0; i < tileEl.length; i++) {
  //   //tileEl[i].('tile--active');
  //   // if (tileEl[i].classList.('tile--active')) {
  //   //     tileEl[i].textContent = "";
  //   // }
  // }
  disableDiceRoll();
});
const enableDiceRoll = function () {
  diceEl1.classList.add("hidden");
  diceEl2.classList.add("hidden");

  btnRoll.classList.remove("disable");
};

const disableDiceRoll = function () {
  btnRoll.classList.add("disable");
};

const resetTiles = function () {
  tileEl.forEach(function (btn) {
    btn.classList.remove("closed");
    btn.classList.remove("tile--active");
  });
};
tileEl.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (this.classList.contains("disable") || this.classList.contains("closed"))
      return;
    this.classList.add("tile--active");

    let tileNumber = this.textContent;
    tileInt = parseInt(tileNumber);
    tileSum += tileInt;

    tileCheck(tileSum);
  });
});
const closeSelectedTiles = function () {
  tileEl.forEach(function (btn) {
    if (btn.classList.contains("tile--active")) {
      btn.classList.add("closed");
    }
  });
};

const tileCheck = function (tilesum) {
  console.log("Tile Sum = " + tileSum);

  if (tilesum == diceSum) {
    console.log("It's a match!");
    closeSelectedTiles();
    enableDiceRoll();
  } else if (tilesum > diceSum) {
    console.log("It's too high");
    for (let i = 0; i < tileEl.length; i++) {
      tileEl[i].classList.remove("tile--active");
      tileSum = 0;
    }
  } else {
    console.log("It's too low");
  }
};


btnNew.addEventListener("click", init);