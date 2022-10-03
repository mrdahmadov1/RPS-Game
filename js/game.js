"use strict";

/* Pick the choice */
const beforeMainSection = document.querySelector(".beforeChoice");
const afterMainSection = document.querySelector(".afterChoice");
const choiceBtns = document.querySelectorAll(".choice");

const housePick = document.querySelector(".house-picked");
const yourPick = document.querySelector(".you-picked");
const pickedBtn = document.querySelector(".picked");
const space = document.querySelector(".space");

const info = document.querySelector(".info");

let randomChoice;
let houseChoice;
let yourChoice;

const chooseHousePick = function () {
  randomChoice = Math.floor(Math.random() * 3);
  houseChoice = choiceBtns[randomChoice];
  space.replaceWith(houseChoice);
  console.log(houseChoice);
};

const chooseYourPick = function (btn) {
  yourChoice = btn;
  pickedBtn.replaceWith(yourChoice);
  console.log(yourChoice);
};

const showInfo = function () {
  info.style.display = "block";
};

const setInfo = function () {};

choiceBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    chooseYourPick(btn);
    console.log(btn);
    setTimeout(chooseHousePick, 500);
    setTimeout(showInfo, 1000);

    beforeMainSection.style.display = "none";
    afterMainSection.style.display = "flex";
  });
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
