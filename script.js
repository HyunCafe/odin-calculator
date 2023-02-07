"use strict";
const buttons = document.querySelectorAll(".calc-cell");
const display = document.querySelector(".display");
const smallerDisplay = document.querySelector(".small-display");

let num1 = "";
let num2 = "";
let operator = "";
let result = "";

// Main Display Function
const displayResult = (value) => {
  display.textContent = value;
};

// Small Display Function
let smallDisplayText = "";
function smallDisplay(text) {
  smallDisplayText += text;
  smallerDisplay.textContent = smallDisplayText;
}

// Clear the main display
const clearDisplay = () => {
  num1 = "";
  num2 = "";
  operator = "";
  result = "";
  display.textContent = "";
  displayResult("");
};

// Delete last input function
function deleteButton() {
  display.textContent = display.textContent.slice(
    0,
    display.textContent.length - 1
  );
}

const operands = (e) => {
  const value = e.target.textContent;
  if (!operator) {
    num1 += value;
    displayResult(num1);
  } else {
    num2 += value;
    displayResult(`${num1} ${operator} ${num2}`);
  }
};

const operators = (e) => {
  operator = e.target.textContent;
  displayResult(`${num1} ${operator}`);
};

const calculate = () => {
  const n1 = +num1;
  const n2 = +num2;
  switch (operator) {
    case "+":
      result = n1 + n2;
      break;
    case "-":
      result = n1 - n2;
      break;
    case "*":
      result = n1 * n2;
      break;
    case "/":
      result = n1 / n2;
      case "%":
      result = n1 % n2;
      break;
    default:
      result = "";
  }
  displayResult(result);
  num1 = result;
  num2 = "";
  operator = "";
};

buttons.forEach((button) => {
  if (button.textContent === "AC") {
    button.addEventListener("click", clearDisplay);
  } else if (button.textContent === "Del") {
    button.addEventListener("click", deleteButton);
  } else if (button.textContent.match(/\d/)) {
    button.addEventListener("click", operands);
  } else if (button.textContent.match(/[\+\-\*\%\/]/)) {
    button.addEventListener("click", operators);
  } else if (button.textContent === "=") {
    button.addEventListener("click", calculate);
  }
});

// Maybe have a cute gif/animation play around the top borders of the calculator

// History Function Display
// const historySpan = document.querySelector("#history-span");

// historySpan.addEventListener("click", () => {
//   //  code
// });

// have a short history of passed calculations show up toward the top and disappear as more inputs come in a scrolling like effect
// OR have a little history button that pops up a short display of history calculations

// Move the numbers and operator / equal sign used from main display to the small display but after pressing equal the answer stays on the main display only
