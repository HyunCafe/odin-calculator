"use strict";
const buttons = document.querySelectorAll(".calc-cell");
const display = document.querySelector(".display");
const smallerDisplay = document.querySelector(".small-display");
let previousValue = null;
let currentValue = null;
let finalValue = null;
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
const smallDisplay = (text) => {
  smallDisplayText = text;
  smallerDisplay.textContent = smallDisplayText;
};

// Clear the main display
const clearDisplay = () => {
  num1 = "";
  num2 = "";
  operator = "";
  result = "";
  displayResult("");
  smallDisplayText = "";
  smallerDisplay.textContent = "";
};

// Delete last input function
function deleteButton() {
  display.textContent = display.textContent.slice(
    0,
    display.textContent.length - 1
  );
}

// Number Values
const operands = (e) => {
  const value = e.target.textContent;
  if (operator) {
    num2 += value;
    displayResult(`${num1} ${operator} ${num2}`);
  } else {
    num1 += value;
    displayResult(num1);
  }
};

// Operator Values
const operators = (e) => {
  operator = e.target.textContent;
  currentValue = null;
  if (operator !== prevOperator) {
    if (prevOperator) {
      calculate();
      num1 = finalValue;
      num2 = "";
    }
    displayResult(`${num1} ${operator}`);
    smallDisplay(` ${operator} `);
  }
  prevOperator = operator;
};

// Calculate Function
const calculate = () => {
  let n1 = +num1;
  let n2 = "";
  if (!n2) {
    n2 = +display.textContent.split(operator)[1];
  }
  switch (operator) {
    case "+":
      finalValue = n1 + n2;
      break;
    case "-":
      finalValue = n1 - n2;
      break;
    case "*":
      finalValue = n1 * n2;
      break;
    case "/":
      finalValue = n1 / n2;
      break;
    case "%":
      finalValue = (n1 / 100) * n2;
      break;
    default:
      finalValue = "";
  }
  displayResult(finalValue);
  smallDisplayText = `${n1} ${operator} ${n2} =`;
  smallDisplay(smallDisplayText);
  num1 = finalValue;
  num2 = "";
  operator = null;
};

// Add Event Listener for all buttons
buttons.forEach((button) => {
  if (button.textContent === "AC") {
    button.addEventListener("click", clearDisplay);
  } else if (button.textContent === "Del") {
    button.addEventListener("click", deleteButton);
  } else if (button.textContent.match(/\d/)) {
    button.addEventListener("click", operands);
  } else if (button.textContent.match(/[\+\-\*\%\/]/)) {
    button.addEventListener("click", (e) => {
      if (previousValue && operator) {
        // Calculate the new values and store the new value as the current value
        finalValue = calculate();
        currentValue = finalValue;
        operator = e.target.innerText;
      } else {
        // Store the first values
        previousValue = +display.textContent;
        currentValue = null;
        operator = e.target.innerText;
      }
      smallDisplay(`${previousValue} ${operator}`);
    });
    // repeatedly pressing equal button keeps doing the last operation
    // Still working on logic here to do this
  } else if (button.textContent === "=") {
    button.addEventListener("click", (e) => {
      if (previousValue && operator) {
        // Calculate the new values and store the new value as the current value
        finalValue = calculate();
        currentValue = finalValue;
      }
    });
  }
});

// Bugs
//Bug 1: History Button disappears on AC clear because its connect to small display
//Bug 3: set toFixed(4) decimal places for results, currently too many decimals

// Add Features
//Feat 1: Add history button with working history on new window --
// to fix this issue I think i will just add the history button outside of the display
// but for aesthetics I need to create a top bar, I will copy the windows default
// Calculator layout for this
//Feat 2: cute gif/animation play around the top borders of the calculator
//Feat 3: Re-add feature of:
// Check if the display text is equal to infinity
// if num > 20 Convert the result to exponential notation
// If the length of the result is less than or equal to 20
// If length >20 Display last 15 chars of the result preceded by "..."
