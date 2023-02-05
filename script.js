// Clear Display Function
function displayResult(result) {
  const resultElement = document.getElementsByClassName("display");
  resultElement.textContent = result;
}

// multiply function
function multiplyCalc() {

  }
  


// division function
function divisionCalc() {

}

// addition function
function additionCalc() {

}

// subtraction function
function subtractionCalc() {

}

// percentage function
function percentCalc() {

}

// equal calculate
function equalCalc() {

}

// clear all function


// Delete last input function

// History Function Display

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
