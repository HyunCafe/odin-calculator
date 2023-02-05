const buttons = document.querySelectorAll(".calc-cell");
const display = document.querySelector(".display");
const smallDisplay = document.querySelector(".small-display");

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
  display.textContent = display.textContent.slice(0, -1);
}

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

//// need to figure out a way for the contents in display to move to the small display once an arithmetic button is pressed

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let text = button.textContent;
    if (display.textContent.length >= 18) {
      let result = parseFloat(display.textContent + text).toExponential();
      if (result.length > 20) {
        result = "..." + result.substring(result.length - 15, result.length);
      }
      displayResult(result);
    } else {
      display.textContent += text;
    }
  });
});

// Maybe have a cute gif/animation play around the top borders of the calcula
