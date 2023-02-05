"use strict";
const buttons = document.querySelectorAll(".calc-cell");
const display = document.querySelector(".display");
const smallerDisplay = document.querySelector(".small-display");

// Multiply function

// Division function

// Addition function

// Subtraction function

// Equal calculate

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
// Calculate Function

// History Function Display

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

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let text = button.textContent;
    let result = parseFloat(display.textContent + text);
    if (!isNaN(result) && display.textContent.length >= 18) {
      result = result.toExponential();
      if (result.length > 20) {
        result = "..." + result.substring(result.length - 15, result.length);
      }
      displayResult(result);
    } else {
      display.textContent += text;
    }
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
        break;
      case "div-btn":
        break;
      case "x-btn":
        break;
      case "min-btn":
        break;
      case "plus-btn":
        break;
      case "eq-btn":
      default:
    }
  });
});
// Maybe have a cute gif/animation play around the top borders of the calculator
