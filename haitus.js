"use strict";
const buttons = document.querySelectorAll(".calc-cell");
const display = document.querySelector(".display");
const smallerDisplay = document.querySelector(".small-display");

// Move the numbers and operator / equal sign used from main display to the small display but after pressing equal the answer stays on the main display only

// Define calculation functions
const calculationFunctions = {
    multiply(...operands) {
      return operands.reduce((result, num) => result * num, 1);
    },
    divide(...operands) {
      return operands.reduce((result, num) => result / num, 1);
    },
    add(...operands) {
      return operands.reduce((result, num) => result + num), 0;
    },
    subtract(...operands) {
      return operands.reduce((result, num) => result - num, 0);
    },
    percent(num1, num2) {
      return (num1 / 100) * num2;
    }
  }
  
// Calculate Function
  function calculate(operator, ...operands) {
    let result;
    switch (operator) {
      case "*":
        result = calculationFunctions.multiply(...operands);
        break;
      case "/":
        result = calculationFunctions.divide(...operands);
        break;
      case "+":
        result = calculationFunctions.add(...operands);
        break;
      case "-":
        result = calculationFunctions.subtract(...operands);
        break;
      case "%":
        result = calculationFunctions.percent(...operands);
        break;
    }
    displayResult(result);
  }

// Clear the main display
function clearDisplay() {
    mainDisplayText = '';
    display.textContent = '';
    }

// Delete last input function
function deleteButton() {
  display.textContent = display.textContent.slice(
    0,
    display.textContent.length - 1
  );
}

// have a short history of passed calculations show up toward the top and disappear as more inputs come in a scrolling like effect
// OR have a little history button that pops up a short display of history calculations

// Small Display Function
let smallDisplayText = "";
let mainDisplayText = "";
let isOperatorPressed = false;

function smallDisplay(text) {
  smallDisplayText += text;
  const resultElement = document.getElementsByClassName("small-display")[0];
  resultElement.textContent = smallDisplayText;
}

// Main Display Function
function displayResult(result) {
    const resultElement = document.getElementsByClassName("display")[0];
    resultElement.textContent = result;
    mainDisplayText = result;
  }
  

// Clear Display Function
function clearDisplay() {
  display.textContent = "0";
  mainDisplayText = "";
  smallDisplayText = "";
  isOperatorPressed = false;
}

// all button loops
buttons.forEach((button) => {
  // Skip buttons with text "history" or "del"
  if (
    button.textContent === "history" ||
    button.textContent === "=" ||
    button.textContent === "del" ||
    button.classList.contains("history-btn") ||
    button.id === "del-btn"
  ) {
    // If the display is empty, set the display to "history"
    if (display.textContent === "") {
      display.textContent = "history";
    }
    return;
  }
  // Add a click event listener to each button
  button.addEventListener("click", () => {
    // Get the text content of the button
    let text = button.textContent;
    // Check if the display text is equal to infinity
    if (display.textContent === "Infinity") {
      // If the text is infinity, then return
      return;
    }
    // Compute display result by adding button text
    let result = parseFloat(display.textContent + text);
    // If result isn't a number or display text is short
    if (isNaN(result) || display.textContent.length < 18) {
      display.textContent += text;
      return;
    }
    // if num > 20 Convert the result to exponential notation
    result = result.toExponential();
    // If the length of the result is less than or equal to 20
    if (result.length <= 20) {
      displayResult(result);
      return;
    }
    // If length >20 Display last 15 chars of the result preceded by "..."
    result = "..." + result.substring(result.length - 15, result.length);
    displayResult(result);
  });
});

// Event Listeners
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.id) {
      case "ac-btn":
        clearDisplay();
        smallDisplay('');
        break;
      case "del-btn":
        deleteButton();
        break;
      case "perc-btn":
        smallDisplay(mainDisplayText + " % ");
        percent();
        isOperatorPressed = true;
        break;
      case "div-btn":
        smallDisplay(mainDisplayText + " / ");
        clearDisplay();
        divide();
        isOperatorPressed = true;
        break;
      case "x-btn":
        smallDisplay(mainDisplayText + " * ");
        clearDisplay();
        multiply();
        isOperatorPressed = true;
        break;
      case "min-btn":
        smallDisplay(mainDisplayText + " - ");
        clearDisplay();
        subtract();
        isOperatorPressed = true;
        break;
      case "plus-btn":
        smallDisplay(mainDisplayText + " + ");
        clearDisplay();
        add();
        isOperatorPressed = true;
        break;
      case "eq-btn":
        smallDisplay('');
        clearDisplay();
        calculate();
        displayResult();
        break;
      default:
        displayResult(mainDisplayText + button.textContent);
    }
  });
});

// Maybe have a cute gif/animation play around the top borders of the calculator

// History Function Display
// const historySpan = document.querySelector("#history-span");

// historySpan.addEventListener("click", () => {
//   //  code
// });
