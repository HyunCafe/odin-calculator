"use strict";
const buttons = document.querySelectorAll(".calc-cell");
const display = document.querySelector(".display");
const smallerDisplay = document.querySelector(".small-display");

let num1 = '';
let num2 = '';
let operator = '';
let result = '';

// Main Display Function
const displayResult = (value) => {
  display.textContent = value;
};

// Small Display Function
let smallDisplayText = '';
const smallDisplay = (text) => {
  smallDisplayText += text;
  smallerDisplay.textContent = smallDisplayText;
}

// Clear the main display
const clearDisplay = () => {
  num1 = '';
  num2 = '';
  operator = '';
  result = '';
  displayResult('');
  smallDisplayText = '';
  smallerDisplay.textContent = '';
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
  if (!operator) {
    num1 += value;
    displayResult(num1);
  } else {
    num2 += value;
    displayResult(`${num1} ${operator} ${num2}`);
  }
};

// Operator Values
const operators = (e) => {
  operator = e.target.textContent;
  displayResult(`${num1} ${operator}`);
  smallDisplay(` ${operator} `);
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
      result = n1 / 100 * n2;
      break;
    default:
      result = '';
  }
  displayResult(result);
  smallDisplayText = `${n1} ${operator} ${n2} = `;
  smallDisplay('');
};

buttons.forEach((button) => {
  if (button.textContent === "AC") {
    button.addEventListener("click", clearDisplay);
  } else if (button.textContent === "Del") {
    button.addEventListener("click", deleteButton);
  } else if (button.textContent.match(/\d/)) {
    button.addEventListener("click", operands);
  } else if (button.textContent.match(/[\+\-\*\%\/]/)) {
    button.addEventListener("click", (e) => operators(e, smallDisplay(display.textContent + ` ${operator} ` + num2)));
  } else if (button.textContent === "=") {
    button.addEventListener("click", () => {
      calculate();
      num1 = result;
      operator = null;
      num2 = '';
    });
  }
});

// Bugs 
//Bug 1: History Button disappears on AC clear because its connect to small display
//Bug 2: Repeated press of operators display on small window, want it only once
//Bug 3: set toFixed(4) decimal places for results, currently too many decimals
//Bug 4: after doing an operation and adding more numbers it doesn't not clear the previous history
//Bug 5: bug in how the small window displays a 2nd operation reusing old one

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
//Feat 4: repeatedly pressing equal button keeps doing the last operation