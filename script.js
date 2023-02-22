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
const resizers = document.querySelectorAll(".resizer");

// Variables
const minWidth = 300;
const minHeight = 400;
const maxWidth = 1200;
const maxHeight = 1000;
let smallDisplayText = "";
let previousValue = null;
let currentValue = null;
let num1 = "";
let num2 = "";
let operator = "";
let result = "";
let positionX = 0;
let positionY = 0;

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

// Function to minimize
function minimizeCalculator() {
  // Get the current position of the calculator before adding the minimized class
  let rect = calculator.getBoundingClientRect();
  positionX = rect.x;
  positionY = rect.y;
  // Add the minimized class to the calculator
  calculator.classList.add("minimized");
}

// Function to maximize
function maximizeCalculator() {
  calculator.style.height = "100%";
  calculator.style.width = "100%";
  maximizeBtn.style.transform = "rotate(0deg)";
}

// Function to close
function closeCalculator(element, delay) {
  let rect = calculator.getBoundingClientRect();
  setTimeout(() => {
    element.style.display = "none";
  }, delay);
  // Add the minimized class to the calculator
  calculator.classList.add("closed");
}

// Add Event Listener for the Top Nav Features
minimizeBtn.addEventListener("click", minimizeCalculator);
maximizeBtn.addEventListener("click", maximizeCalculator);
closeBtn.addEventListener("click", () => {
  closeCalculator(calculator, 500);
});

// Add event listener to calcLogo element to restore calculator
document.querySelector(".calcLogo").addEventListener("click", function () {
  calculator.classList.remove("minimized");
  calculator.classList.remove("closed");
  calculator.style.display = "flex";
});

// Resize Corner Logic

// Function to Resize Calculator
for (let resizer of resizers) {
  resizer.addEventListener("mousedown", startResize);
}

function startResize(e) {
  let currentResizer = e.target;
  const rect = calculator.getBoundingClientRect();

  const mousemove = (e) => {
    const dynamicValue = {};
    switch (currentResizer.className) {
      case "resizer nw":
        dynamicValue.width = rect.right - e.clientX;
        dynamicValue.height = rect.bottom - e.clientY;
        setTop();
        setLeft();
        break;
      case "resizer sw":
        dynamicValue.width = rect.right - e.clientX;
        dynamicValue.height = Math.max(e.clientY - rect.top, minHeight);
        setLeft();
        break;
      case "resizer se":
        dynamicValue.width = Math.max(e.clientX - rect.left, minWidth);
        dynamicValue.height = Math.max(e.clientY - rect.top, minHeight);
        break;
      case "resizer ne":
        dynamicValue.width = Math.max(e.clientX - rect.left, minWidth);
        dynamicValue.height = rect.bottom - e.clientY;
        setTop();
        break;
    }
    // Top position of the calculator during resize.
    function setTop() {
      if (dynamicValue.height > minHeight) {
        if (dynamicValue.height > maxHeight) {
          calculator.style.top = rect.bottom - maxHeight + "px";
        } else {
          calculator.style.top = notNegative(e.clientY) + "px";
        }
      } else {
        calculator.style.top = rect.bottom - minHeight + "px";
      }
    }
    // Left position of the calculator during resize.
    function setLeft() {
      if (dynamicValue.width > minWidth) {
        if (dynamicValue.width > maxWidth) {
          calculator.style.left = rect.right - maxWidth + "px";
        } else {
          calculator.style.left = notNegative(e.clientX) + "px";
        }
      } else {
        calculator.style.left = rect.right - minWidth + "px";
      }
    }
    calculator.style.height =
      controlMinSize(dynamicValue.height, minHeight, maxHeight) + "px";
    calculator.style.width =
      controlMinSize(dynamicValue.width, minWidth, maxWidth) + "px";
  };

  // Stop Resizing Event
  const mouseup = () => {
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
  };
  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseup", mouseup);
}

// Min and Max Size of Calc
function controlMinSize(size, minSize, maxSize) {
  return Math.min(Math.max(size, minSize), maxSize);
}

function notNegative(value) {
  return Math.max(value, 0);
}

// Move calculator using TopNav bar hold
topNav.addEventListener("mousedown", mousedown);
function mousedown(e) {
  // Only move the calculator when the mouse is clicked once on the topNav element
  if (e.target === topNav && e.detail === 1) {
    isMouseDown = true;
    const rect = calculator.getBoundingClientRect();
    const overflow = {
      x: e.clientX - rect.x,
      y: e.clientY - rect.y,
    };
    document.addEventListener("mousemove", mousemove);
    function mousemove(e) {
      // If mouse is down, move the calculator
      if (isMouseDown) {
        calculator.style.left = notNegative(e.clientX - overflow.x) + "px";
        calculator.style.top = notNegative(e.clientY - overflow.y) + "px";
      }
    }
    document.addEventListener("mouseup", mouseup);
    // Function for handling mouse up event
    function mouseup() {
      document.removeEventListener("mousemove", mousemove);
      document.removeEventListener("mouseup", mouseup);
      isMouseDown = false;
    }
  }
}

// Bugs
//Bug 3: set toFixed(4) decimal places for results, currently too many decimals
// Bug 4: fix responsiveness for the calculator (Mostly responsive)
// just need to fix shrink
// bug 5: resizer not behaving how i want
// bug 6: after calc is closed, clicking on calc logo should make calc reappear
// bug 7: new bug found.. when increasing size of calc then trying to minimize leaves a shadow copy of the calc..

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
// Feat: Add Desktop Icon for my Github Profile
// Feat: Add Desktop Icon for Calculator
// Feat: Add Fake menu for windows logo press
// Feat:
