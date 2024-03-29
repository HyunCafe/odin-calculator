"use strict";

// DOM Selectors
const body = document.body;
const buttons = document.querySelectorAll(".calculator-button, #eq-btn");
const display = document.querySelector(".display");
const smallerDisplay = document.querySelector(".small-display");
const calculator = document.querySelector(".calculator");
const historyBtn = document.querySelector("#history-btn");
const historyOverlay = document.querySelector(".history-window");
const historyList = document.querySelector(".history-list");
const minimizeBtn = document.querySelector("#minimize-btn");
const maximizeBtn = document.querySelector("#maximize-btn");
const isMaximized = calculator.classList.contains("maximized");
const closeBtn = document.querySelector("#close-btn");
const resizers = document.querySelectorAll(".resizer");
const menu = document.querySelector(".menu");
const windLogo = document.querySelector(".windLogo");

// Variables
const menuWidth = menu.offsetWidth;
const menuHeight = menu.offsetHeight;
const minWidth = 300;
const minHeight = 500;
const maxWidth = 1200;
const maxHeight = 1000;
let history = [];
let smallDisplayText = "";
let previousValue = null;
let currentValue = null;
let num1 = "";
let num2 = "";
let operator = "";
let result = "";
let equalsPressed = false;
let lastEquals = false;
let originalWidth = calculator.offsetWidth;
let originalHeight = calculator.offsetHeight;
let originalLeft = calculator.offsetLeft;
let originalTop = calculator.offsetTop;
let isMouseDown = false;
menu.style.display = "none";

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
  if (operator) {
    // If an operator has been selected, remove the last digit from num2
    num2 = num2.toString().slice(0, -1);
    displayResult(`${num1} ${operator} ${num2}`);
  } else {
    // If no operator has been selected, remove the last digit from num1
    num1 = num1.toString().slice(0, -1);
    // If num1 is now empty, set it to 0
    if (num1 === "") {
      num1 = "0";
    }
    displayResult(num1);
  }
}

// Handle Input of Operand (Number) Values
function operands(e) {
  const value = e.target.textContent;
  if (operator) {
    if (value === "." && num2.includes(".")) {
    } else {
      num2 += value;
      displayResult(`${num1} ${operator} ${num2}`);
    }
  } else {
    if (value === "." && num1.includes(".")) {
    } else {
      num1 += value;
      displayResult(num1);
    }
  }
}

// Store and Display Operator Selection
function operators(e) {
  operator = e.target.textContent;
  num1 = result || num1;
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
  if (result) {
    let resultEquation = `${n1} ${operator} ${n2} =`;
    let resultAnswer = `${result}`;
    history.push(`${resultEquation} ${resultAnswer}`);
    addToHistory(`${resultEquation} ${resultAnswer}`);
  }
  return result;
}

// Add Event Listener for all buttons
buttons.forEach((button) => {
  switch (button.id) {
    case "ac-btn":
      button.addEventListener("click", clearDisplay);
      button.addEventListener("touchstart", clearDisplay, { passive: false });
      break;
    case "del-btn":
      button.addEventListener("click", deleteButton);
      button.addEventListener("touchstart", deleteButton, { passive: false });
      break;
    case "eq-btn":
      button.addEventListener("click", equalButton);
      button.addEventListener("touchstart", equalButton, { passive: false });
      break;
    default:
      if (button.textContent.match(/[0-9\.]/)) {
        button.addEventListener("click", operands);
        button.addEventListener("touchstart", operands, { passive: false });
      } else if (button.textContent.match(/[\+\-\*\%\/]/)) {
        button.addEventListener("click", operatorButtons);
        button.addEventListener("touchstart", operatorButtons, { passive: false });
      }
  }
});

// Function for operator button press
function operatorButtons(e) {
  // Check if equals button was just pressed
  if (equalsPressed) {
    num2 = "";
    result = "";
    equalsPressed = false;
  }
  // Reuse the last operator to keep recalculating the result for repeat operators press.
  if (previousValue && operator && num2 && !lastEquals) {
    result = calculate();
    currentValue = result;
    operator = e.target.innerText;
  } else {
    // Check if = was pressed last
    if (equalsPressed) {
      num1 = display.textContent;
      equalsPressed = false;
    } else {
      previousValue = display.textContent;
    }
    operator = e.target.innerText;
  }
  // Display the previous value and operator in the small display
  smallDisplay(`${previousValue} ${operator}`);
  lastEquals = false;
}

// Function for equal button press
function equalButton() {
  let lastNum2 = num2;
  if (num2 === "") {
    // If there is no second operand, the result should be the first operand
    result = +num1;
  } else {
    result = calculate();
  }
  num1 = result;
  num2 = "";
  equalsPressed = true;
  lastEquals = true;

  // Ability to recalculate last operation with pressing = alone
  if (!num2) num2 = lastNum2;
}

// History Function
function addToHistory(entry) {
  const listItem = document.createElement("li");
  listItem.textContent = entry;
  historyList.append(listItem);
}

// Event listener for the history button
historyBtn.addEventListener("click", () => {
  toggleHistoryOverlay();
});
historyBtn.addEventListener("touchstart", () => {
  toggleHistoryOverlay();
});

function toggleHistoryOverlay() {
  historyOverlay.style.display =
    historyOverlay.style.display === "block" ? "none" : "block";
}

// Function for Maximize
function maximizeCalculator() {
  calculator.classList.toggle("maximized");
  if (calculator.classList.contains("maximized")) {
    // Store the original position and size
    originalWidth = calculator.offsetWidth;
    originalHeight = calculator.offsetHeight;
    originalLeft = calculator.offsetLeft;
    originalTop = calculator.offsetTop;
    // Set the calculator to the maximum size and position
    calculator.style.width = "100vw";
    calculator.style.height = "100vh";
    calculator.style.left = 0;
    calculator.style.top = 0;
  } else {
    // Restore the original position and size
    calculator.style.width = originalWidth + "px";
    calculator.style.height = originalHeight + "px";
    calculator.style.left = originalLeft + "px";
    calculator.style.top = originalTop + "px";
  }
}

// Add Event Listener for the Top Nav Features
minimizeBtn.addEventListener("click", () => {
  calculator.style.display = "none";
});
minimizeBtn.addEventListener("touchstart", () => {
  calculator.style.display = "none";
});

maximizeBtn.addEventListener("click", () => {
  maximizeCalculator();
});
maximizeBtn.addEventListener("touchstart", () => {
  maximizeCalculator();
});

closeBtn.addEventListener("click", () => {
  calculator.style.display = "none";
});
closeBtn.addEventListener("touchstart", () => {
  calculator.style.display = "none";
});

// Add event listener to calcLogo element to restore calculator
document.querySelectorAll(".calculator-link, .calcLogo").forEach((element) => {
  element.addEventListener("click", () => {
    calculator.classList.remove("minimized");
    calculator.classList.remove("closed");
    calculator.style.display = "flex";
  });
});

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

// Move calculator using Top portion of calc
calculator.addEventListener("mousedown", mousedown);
calculator.addEventListener("touchstart", mousedown);

function mousedown(e) {
  e.preventDefault();
  let isMouseDown = true;
  let clientX, clientY;

  if (e.type === "mousedown") {
    clientX = e.clientX;
    clientY = e.clientY;
  } else if (e.type === "touchstart") {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  }

  const calculatorTop = calculator.getBoundingClientRect().top;
  const calculatorHeight = calculator.getBoundingClientRect().height;
  const topSectionHeight = calculatorHeight * 0.08;
  if (clientY < calculatorTop + topSectionHeight) {
    const rect = calculator.getBoundingClientRect();
    const overflow = {
      x: clientX - rect.x,
      y: clientY - rect.y
    };
    document.addEventListener("mousemove", mousemove, { passive: false });
    document.addEventListener("touchmove", mousemove, { passive: false });

    function mousemove(e) {
      e.preventDefault();
      if (e.type === "mousemove") {
        clientX = e.clientX;
        clientY = e.clientY;
      } else if (e.type === "touchmove") {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      }
      // If mouse is down or touch event, move the calculator
      if (isMouseDown) {
        let newX = notNegative(clientX - overflow.x);
        let newY = notNegative(clientY - overflow.y);

        let maxX =
          calculator.parentElement.clientWidth - calculator.clientWidth;
        let maxY =
          calculator.parentElement.clientHeight - calculator.clientHeight;

        if (newX < 0) newX = 0;
        if (newY < 0) newY = 0;
        if (newX > maxX) newX = maxX;
        if (newY > maxY) newY = maxY;

        calculator.style.left = newX + "px";
        calculator.style.top = newY + "px";
      }
    }

    document.addEventListener("mouseup", mouseup);
    document.addEventListener("touchend", mouseup);

    // Function for handling mouse up or touch end events
    function mouseup() {
      document.removeEventListener("mousemove", mousemove);
      document.removeEventListener("mouseup", mouseup);
      document.removeEventListener("touchmove", mousemove);
      document.removeEventListener("touchend", mouseup);
      isMouseDown = false;
    }
  }
}

document.addEventListener("click", (e) => {
  // If the clicked element is not the start menu or any of its children
  if (!windOverlay.contains(e.target) && e.target !== windLogo) {
    windOverlay.style.display = "none";
  }
});

document.addEventListener("contextmenu", (event) => {
  // Show the menu at the position of the right-click
  menu.style.display = "block";
  menu.style.left = `${event.pageX - menuWidth / 15}px`;
  menu.style.top = `${event.pageY - menuHeight / 18}px`;
  document.addEventListener("click", hideMenu);
});

// Hide Menu Function
function hideMenu(event) {
  if (!menu.contains(event.target)) {
    menu.style.display = "none";
    document.removeEventListener("click", hideMenu);
  }
}

// Prevent Browser right click from showing so my feature can be seen
window.addEventListener(
  "contextmenu",
  function (e) {
    e.preventDefault();
  },
  false
);

// Start Menu Hide and Show
const windOverlay = document.querySelector(".start-window");

function toggleWindowsOverlay() {
  windOverlay.style.display =
    windOverlay.style.display === "block" ? "none" : "block";
}
windLogo.addEventListener("click", toggleWindowsOverlay);

// Get Time and Date for footer
function updateLocalDateTime() {
  const now = new Date();
  // Format the date and update the DOM
  const dateElement = document.querySelector(".bottom-nav-bar__local-date");
  const dateOptions = { year: "numeric", month: "2-digit", day: "2-digit" };
  const formattedDate = now
    .toLocaleDateString("en-US", dateOptions)
    .replace(/\//g, "/");
  dateElement.textContent = formattedDate;
  // Format the time and update the DOM
  const timeElement = document.querySelector(".bottom-nav-bar__local-time");
  const timeOptions = { hour: "numeric", minute: "2-digit" };
  const formattedTime = now
    .toLocaleTimeString("en-US", timeOptions)
    .replace(/\s+/g, "")
    .toUpperCase();
  timeElement.textContent = formattedTime;
}
updateLocalDateTime();
setInterval(updateLocalDateTime, 30000);


// Update viewport real time on calculator sized based on viewport adjustments
function setCalculatorSize() {
  const mobileWidth = 230;
  const mobileHeight = 400;
  const desktopWidth = 350;
  const desktopHeight = 600;

  // Check if the screen width is less than or equal to 880px (mobile breakpoint)
  if (window.innerWidth <= 880) {
    calculator.style.width = mobileWidth + "px";
    calculator.style.height = mobileHeight + "px";
  } else {
    calculator.style.width = desktopWidth + "px";
    calculator.style.height = desktopHeight + "px";
  }
}

// Set the initial size
document.addEventListener("DOMContentLoaded", setCalculatorSize);

// Listen for viewport width changes
const mediaQuery = window.matchMedia("(max-width: 880px)");
mediaQuery.addEventListener("change", setCalculatorSize);


// Bugs
//Bug 3: set toFixed(4) decimal places for results, currently too many decimals
//Bug main : Make it responsive for mobile as well
// bug 4: fix chaining operators to show up in small window like windows calc

// TODO

//Feat 2: cute gif/animation play around the top borders of the calculator
//Feat 3: Re-add feature of:
// Check if the display text is equal to infinity
// if num > 20 Convert the result to exponential notation
// If the length of the result is less than or equal to 20
// If length >20 Display last 15 chars of the result preceded by "..."

// Mentor Reviews
// Issue #1 The "Del" button does not work properly, as it only changes the display without changing the actual input.
