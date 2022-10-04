"use strict";

/* Pick the choice */
const beforeMainSection = document.querySelector(".beforeChoice");
const afterMainSection = document.querySelector(".afterChoice");
const choiceBtns = document.querySelectorAll(".choice");
const againBtn = document.querySelector(".again");

const housePick = document.querySelector(".house-picked");
const yourPick = document.querySelector(".you-picked");
const pickedBtn = document.querySelector(".picked");
const space = document.querySelector(".space");

const winScore = document.querySelector(".win-score");
const loseScore = document.querySelector(".lose-score");
const info = document.querySelector(".info");

let randomChoice;
let yourChoice;
let houseChoice;
let yourChosenPick;
let houseChosenPick;
let newWinScore;
let newLoseScore;

const chooseHousePick = function () {
  randomChoice = Math.floor(Math.random() * 3);
  houseChoice = choiceBtns[randomChoice].cloneNode(true);
  housePick.replaceChild(houseChoice, space);
};

const chooseYourPick = function (btn) {
  yourChoice = btn.cloneNode(true);
  yourPick.prepend(yourChoice);
};

const showInfo = function () {
  setInfo();
  info.style.display = "block";
};

const setInfo = function () {
  yourChosenPick = yourPick.firstElementChild;
  houseChosenPick = housePick.firstElementChild;
  newWinScore = Number(winScore.textContent);
  newLoseScore = Number(loseScore.textContent);

  if (
    (yourChosenPick.classList.contains("paper") &&
      houseChosenPick.classList.contains("paper")) ||
    (yourChosenPick.classList.contains("scissors") &&
      houseChosenPick.classList.contains("scissors")) ||
    (yourChosenPick.classList.contains("rock") &&
      houseChosenPick.classList.contains("rock"))
  ) {
    info.firstElementChild.textContent = "SCORELESS";
  } else if (
    (yourChosenPick.classList.contains("paper") &&
      houseChosenPick.classList.contains("rock")) ||
    (yourChosenPick.classList.contains("scissors") &&
      houseChosenPick.classList.contains("paper")) ||
    (yourChosenPick.classList.contains("rock") &&
      houseChosenPick.classList.contains("scissors"))
  ) {
    info.firstElementChild.textContent = "You Win";
    newWinScore++;
  } else {
    info.firstElementChild.textContent = "You Lose";
    newLoseScore++;
  }

  winScore.textContent = newWinScore;
  loseScore.textContent = newLoseScore;
};

choiceBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    chooseYourPick(btn);
    setTimeout(chooseHousePick, 500);
    setTimeout(showInfo, 1000);

    beforeMainSection.style.display = "none";
    afterMainSection.style.display = "flex";
  });
});

againBtn.addEventListener("click", function () {
  yourPick.firstElementChild.remove();
  housePick.replaceChild(space, houseChoice);
  info.firstElementChild.textContent = "";
  yourChoice = undefined;
  houseChoice = undefined;
  yourChosenPick = undefined;
  houseChosenPick = undefined;

  beforeMainSection.style.display = "flex";
  afterMainSection.style.display = "none";
});

/* Modal Rules */
const btnOpenRules = document.querySelector(".rules");
const btnCloseRules = document.querySelector(".close-rules");
const modalRules = document.querySelector(".modal-rules");

btnOpenRules.addEventListener("click", function () {
  modalRules.style.display = "flex";
});

btnCloseRules.addEventListener("click", function () {
  modalRules.style.display = "none";
});
