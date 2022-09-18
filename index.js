"use strict";

// 1:
const body = document.querySelector("body");
body.style.fontFamily = "Arial";

// 2:

document.querySelector(".title").style.textAlign = "center";

// 3:
document.querySelectorAll(".category").forEach((element) => {
  element.style.textDecoration = "underline";
  element.style.fontStyle = "italic";
  element.style.fontSize = "1.5rem";
  element.style.lineHeight = "2rem";
});
document.querySelectorAll(".food-item").forEach((element) => {
  element.style.fontSize = "1rem";
  element.style.lineHeight = "1.7rem";
});

// 4:

function colorGenerator() {
  let r = Math.floor(Math.random() * 256).toFixed(0);
  let g = Math.floor(Math.random() * 256).toFixed(0);
  let b = Math.floor(Math.random() * 256).toFixed(0);
  let a = Math.random().toFixed(3);
  return `rgba(${r},${g},${b},${a})`;
}

document.querySelectorAll(".food-category").forEach((element) => {
  element.style.backgroundColor = colorGenerator();
});

// 5:
let main = document.querySelector(".main");
main.style.display = "flex";
main.style.gap = "10%";
// in this part just remain the making responsive
document.querySelectorAll(".food-category").forEach((element) => {
  element.style.width = "30%";
  element.style.height = "10%";
});

// 6:

const warning1 = document.getElementById("warning");
warning1.style.fontSize = "1.5rem";
warning1.style.textAlign = "center";
warning1.style.fontFamily = "cursive";

// 7:

const even = document
  .querySelectorAll(".allergies :nth-child(even)")
  .forEach((element) => {
    element.style.width = "90%";
    element.style.backgroundColor = "skyblue";
  });

const allergyInfo = document
  .querySelectorAll(".allergy-info")
  .forEach((element) => {
    element.style.width = "30%";
    element.style.margin = "2px auto";
  });

// 8:
const footer = document.querySelectorAll(".footer").forEach((element) => {
  element.style.display = "flex";
  element.style.alignItems = "center";
  element.style.width = "50%";
  element.style.margin = "10px auto";
  element.style.gap = "20px";
  element.style.fontSize = "12px";
});
const foodDesc = document.querySelectorAll(".food-desc").forEach((element) => {
  element.style.width = "90px";
  element.style.height = "90px";
  element.style.display = "flex";
  element.style.alignItems = "center";
  element.style.justifyContent = "center";
  element.style.border = "4px solid orange";
  element.style.borderRadius = "50%";
  element.style.margin = "10px ";
});
