// DOM Selectors
const buttons = document.querySelectorAll(".calc-cell");
const display = document.querySelector(".display");
const smallerDisplay = document.querySelector(".small-display");
const calculator = document.querySelector(".calc-grid");
const topNav = document.querySelector(".top-nav");
const historyBtn = document.querySelector("#history-btn");
const minimizeBtn = document.querySelector("#minimize");
const maximizeBtn = document.querySelector("#maximize");
const closeBtn = document.querySelector("#close");

// Variables
let smallDisplayText = "";
let previousValue = null;
let currentValue = null;
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

// Function to Delete Last Input on Main Display
function deleteButton() {
  display.textContent = display.textContent.slice(
    0,
    display.textContent.length - 1
  );
}

// Handle Input of Operand (Number) Values
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

// Store and Display Operator Selection
function operators(e) {
  operator = e.target.textContent;
  num1 = result || num1;
  num2 = "";
  displayResult(`${num1} ${operator}`);
  smallDisplay(`${operator}`);
}

// Perform calculation based on operator
function calculate() {
  let n1 = +num1;
  let n2 = +num2;
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
      break;
    case "%":
      result = (n1 / 100) * n2;
      break;
    default:
      result = "";
  }
  // Displays the result, updates the smaller display, sets result as new num1 and resets num2.
  displayResult(result);
  smallDisplayText = `${n1} ${operator} ${n2} =`;
  smallDisplay(smallDisplayText);
  num1 = result;
  num2 = "";
  return result;
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
  // Reuse the last operator to keep recalculating the result for repeat operators press.
  if (previousValue && operator && num2) {
    result = calculate();
    currentValue = result;
    operator = e.target.innerText;
  } else {
    previousValue = +display.textContent;
    operator = e.target.innerText;
  }
  // Display the previous value and operator in the small display
  smallDisplay(`${previousValue} ${operator}`);
}

// Function for equal button press
function equalButton() {
  let lastNum2 = num2;
  result = calculate();
  // Ability to recalculate last operation with pressing = alone
  if (!num2) num2 = lastNum2;
}

// Move calculator using TopNav bar hold
topNav.addEventListener("mousedown", mousedown);
// Get the rectangle around the calculator
let rect = calculator.getBoundingClientRect();

function mousedown(e) {
  let isDown = true;

  // Overflow values for mouse movement
  const overflow = {
    x: e.clientX - rect.x,
    y: e.clientY - rect.y,
  };

  // If mouse is not clicking a control button, add mouse move event
  if (e.target != hideBtn && e.target != minimizeBtn && e.target != closeBtn) {
    document.body.addEventListener("mousemove", mousemove);
  }

  // Function for handling mouse movement
  function mousemove(e) {
    // If mouse is down, move the calculator
    if (isDown) {
      calculator.style.left = notNegative(e.clientX - overflow.x) + "px";
      calculator.style.top = notNegative(e.clientY - overflow.y) + "px";
    }
  }
  document.addEventListener("mouseup", mouseup);

  // Function for handling mouse up event
  function mouseup() {
    document.body.removeEventListener("mousemove", mousemove);
    document.removeEventListener("mouseup", mouseup);
    isDown = false;
  }
}

// Function to ensure value is not negative
function notNegative(value) {
  if (value < 0) value = 0;
  return value;
}

// Function to minimize
function minimizeCalculator() {
  calculator.style.height = "30px";
  calculator.style.width = "150px";
  calculator.style.overflow = "hidden";
  minimizeBtn.style.transform = "rotate(180deg)";
}

// Function to maximize
function maximizeCalculator() {
  calculator.style.height = "100%";
  calculator.style.width = "100%";
  maximizeBtn.style.transform = "rotate(0deg)";
}

// Function to close
function closeCalculator(element, delay) {
  element.style.transition = `${delay}ms`;
  setTimeout(() => {
    element.style.display = "none";
  }, delay);
}

// Add Event Listener for the Top Nav Features
minimizeBtn.addEventListener("click", minimizeCalculator);
maximizeBtn.addEventListener("click", maximizeCalculator);
closeBtn.addEventListener("click", () => {
  closeCalculator(calculator, 500);
});

// Bugs
//Bug 1: History Button disappears on AC clear because its connect to small display
//Bug 3: set toFixed(4) decimal places for results, currently too many decimals

// TODO
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
// Feat 4: add minimize option
// Feat 5: add mazimize option
// Feat 6: add close option
