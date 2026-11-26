function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let firstNumber = null;
let operator = null;
let secondNumber = null;

function operate(a, symbol, b) {
  if (symbol === "+") {
    return add(a, b);
  } else if (symbol === "-") {
    return subtract(a, b);
  } else if (symbol === "*") {
    return multiply(a, b);
  } else if (symbol === "/") {
    return divide(a, b);
  }
}

const buttons = document.querySelectorAll(".digit");
const display = document.querySelector(".display");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (firstNumber === null) {
      firstNumber = button.textContent;
    } else {
      firstNumber += button.textContent;
    }
    display.textContent = firstNumber;
  });
});
