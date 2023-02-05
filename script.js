"use strict";
const buttons = document.querySelectorAll(".calc-cell");
const display = document.querySelector(".display");
const smallerDisplay = document.querySelector(".small-display");
const operator = ['+', '-', '*', '/', '%'];


// Multiply function
// function multiply(...operands) {
//     let numbers = Array.from(arguments);
//     let result = 1;
//     for (let num of numbers) {
//       result *= num;
//     }
//     return result;
//   }
function multiply(...operands) {
    return operands.reduce((result, num) => result * num, 1);
  }
  

// Division function
function divide () {
    
}
// Addition function
function add () {
    
}
// Subtraction function
function subtract () {
    
}

// Percent function
function percent () {
    
}
// Calculate Function

function calculate(operator, ...operands) {
    switch (operator) {
        case '*':
    multiply(...operands);
      case '/':
        divide(...operands);
        break;
      case '+':
        add(...operands);
        break;
      case '-':
        subtract(...operands);
        break;
      case '%':
        percent(...operands);
        break;
      default:
        throw new Error(`Invalid operator: ${operator}`);
    }

    displayResult(result);
  }

// Clear all function
function clearDisplay() {
  display.textContent = "";
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

// Have all inputs visually display on the display class
function displayResult(result) {
  display.textContent = result;
}

// Small Display Function
function smallDisplay(result) {
  const resultElement = document.getElementsByClassName("small-display")[0];
  resultElement.textContent = result;
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
        break;
      case "del-btn":
        deleteButton();
        break;
      case "perc-btn":
        percent();
        break;
      case "div-btn":
        divide();
        break;
      case "x-btn":
        multiply();
        break;
      case "min-btn":
        subtract();
        break;
      case "plus-btn":
        add();
        break;
      case "eq-btn":
        calculate();
      default:
    }
  });
});
// Maybe have a cute gif/animation play around the top borders of the calculator


// History Function Display
// const historySpan = document.querySelector("#history-span");

// historySpan.addEventListener("click", () => {
//   //  code
// });