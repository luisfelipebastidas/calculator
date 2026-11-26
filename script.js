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
