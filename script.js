"use strict";
const buttons = document.querySelectorAll(".calc-cell");
const display = document.querySelector(".display");
const smallerDisplay = document.querySelector(".small-display");
let smallDisplayText = "";
let previousValue = null;
let currentValue = null;
let finalValue = null;
let lastCalculation = null;
let num1 = "";
let num2 = "";
let operator = "";
let result = "";

// Main Display Function
function displayResult(value) {
  display.textContent = value;
}

// Small Display Function
function smallDisplay(text) {
  smallDisplayText = text;
  smallerDisplay.textContent = smallDisplayText;
}

// Clear the main display
function clearDisplay() {
  num1 = "";
  num2 = "";
  operator = "";
  result = "";
  displayResult("");
  smallDisplayText = "";
  smallerDisplay.textContent = "";
}

// Delete last input function
function deleteButton() {
  display.textContent = display.textContent.slice(
    0,
    display.textContent.length - 1
  );
}

// Number Values
function operands(e) {
  const value = e.target.textContent;
  if (operator) {
    num2 += value;
    displayResult(`${num1} ${operator} ${num2}`);
  } else {
    num1 += value;
    displayResult(num1);
  }
}

// Operator Values
function operators(e) {
  operator = e.target.textContent;
  calculate();
  num1 = finalValue;
  num2 = "";
  displayResult(`${num1} ${operator}`);
  smallDisplay(`${operator}`);
}

// Calculate Function
function calculate() {
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
}

// Add Event Listener for all buttons
buttons.forEach((button) => {
  switch (button.textContent) {
    case "AC":
      button.addEventListener("click", clearDisplay);
      break;
    case "Del":
      button.addEventListener("click", deleteButton);
      break;
    case "=":
      button.addEventListener("click", equalButton);
      break;
    default:
      if (button.textContent.match(/\d/)) {
        button.addEventListener("click", operands);
      } else if (button.textContent.match(/[\+\-\*\%\/]/)) {
        button.addEventListener("click", operatorButtons);
      }
  }
});

// Function for operator button press
function operatorButtons(e) {
  // Check if previous value and operator exist
  if (previousValue && operator) {
    // Calculate the new value and store it as the final value
    finalValue = calculate();
    // Set the current value to the final value
    currentValue = finalValue;
    // Store the operator pressed
    operator = e.target.innerText;
  } else {
    // Store the first value
    previousValue = +display.textContent;
    // Store the operator pressed
    operator = e.target.innerText;
  }
  // Display the previous value and operator in the small display
  smallDisplay(`${previousValue} ${operator}`);
}

// Function for equal button press
function equalButton(e) {
  // Check if previous value and operator exist
  if (previousValue && operator) {
    // Calculate the new value and store it as the final value
    finalValue = calculate();
    // Store the last calculation
    lastCalculation = operator;
    // Set the previous value to the final value
    previousValue = finalValue;
    // Reset the operator
    operator = null;
  } else if (finalValue) {
    // If the equal button is pressed multiple times, keep doing the last operation
    previousValue = finalValue;
    operator = lastCalculation;
    finalValue = calculate();
    display.textContent = finalValue;
  }
}

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
