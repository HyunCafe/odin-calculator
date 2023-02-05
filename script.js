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
const historySpan = document.querySelector("#history-span");

historySpan.addEventListener("click", () => {
  // Your code to handle the history button press
});

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

// Loop through all buttons
buttons.forEach((button) => {
  // Skip buttons with text "history" or "del"
  if (
    button.textContent === "history" ||
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
