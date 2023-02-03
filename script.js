// Clear Display Function

// Delete last input function

// percentage function

// division function

// multiply function

// subtraction function

// addition function

// equal calculate

// create maximum input value for display

// have a short history of passed calculations show up toward the top and disappear as more inputs come in a scrolling like effect
// OR have a little history button that pops up a short display of history calculations

// Have all inputs visually display on the display class
const buttons = document.querySelectorAll(".calc-cell");
const display = document.querySelector(".display");

function displayResult(result) {
  display.textContent = result;
}

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

// Maybe have a cute gif/animation play around the top borders of the calculator
