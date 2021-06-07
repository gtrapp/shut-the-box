"use strict";

const tileEl = document.querySelectorAll(".tile");
const diceEl1 = document.getElementById("dice--1");
const diceEl2 = document.getElementById("dice--2");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
let hints = document.getElementById("message");

let diceSum = 0;
let tileInt = 0;
let tileSum = 0;
let tilesActive;

btnRoll.addEventListener("click", function () {
  hints.innerHTML = ""
  if (btnRoll.classList.contains("disable")) return;
  //1. Generating a random dice roll
  const dice1 = Math.trunc(Math.random() * 6) + 1;
  const dice2 = Math.trunc(Math.random() * 6) + 1;

  //2. Display dice
  diceEl1.classList.remove("hidden");
  diceEl2.classList.remove("hidden");
  diceEl1.src = `//raw.githubusercontent.com/gtrapp/shut-the-box/main/dice-${dice1}.png`;
  diceEl2.src = `//raw.githubusercontent.com/gtrapp/shut-the-box/main/dice-${dice2}.png`;

  diceSum = dice1 + dice2;
  console.log("Dice Sum = " + diceSum);

  // disable roll dice reset tile sum
  tileSum = 0;
  disableDiceRoll();
  enableTileSelect();
  tilesActive = false;
  hints.innerHTML = "Make a selection";
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
    btn.classList.remove("tile--selected");
  });
};

tileEl.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (
      this.classList.contains("disable") ||
      this.classList.contains("closed") ||
      tilesActive
    )
      return;

    this.classList.add("tile--selected");
    let tileNumber = this.textContent;
    tileInt = parseInt(tileNumber);
    tileSum += tileInt;
    tileCheck(tileSum);
  });
});

const closeSelectedTiles = function () {
  tileEl.forEach(function (btn) {
    if (btn.classList.contains("tile--selected")) {
      btn.classList.add("closed");
    }
  });
};

const tileCheck = function (tilesum) {
  console.log("Tile Sum = " + tileSum);

  if (tilesum == diceSum) {
    hints.innerHTML = "Well done!";
    closeSelectedTiles();
    tilesActive = true;
    disableTileSelect();
    enableDiceRoll();
  } else if (tilesum > diceSum) {
    hints.innerHTML = "Try again";
    console.log("too high");
    for (let i = 0; i < tileEl.length; i++) {
      tileEl[i].classList.remove("tile--selected");
      tileSum = 0;
    }
  } else {
    hints.innerHTML = "";
  }
};

const enableTileSelect = function () {
  tileEl.forEach(function (btn) {
    btn.classList.add("tile--active");
  });
};
const disableTileSelect = function () {
  tileEl.forEach(function (btn) {
    btn.classList.remove("tile--active");
  });
};

// Starting conditions / New Game
const init = function () {
  diceEl1.classList.add("hidden");
  diceEl2.classList.add("hidden");
  enableDiceRoll();
  resetTiles();
  disableTileSelect();
  tilesActive = true;
  hints.innerHTML = "Roll the dice!";
};
init();

btnNew.addEventListener("click", init);
