import {
  add,
  divide,
  multiply,
  subtract,
} from "./exercise-math-lib";

export {};

function getNumber() {
  while (true) {
    const enteredValue = prompt("Gib mir eine Zahl");

    if (enteredValue === null) continue;

    const parsed = parseInt(enteredValue);
    if (Number.isNaN(parsed)) continue;

    return parsed;
  }
}

// const getNumber2 = () => {

// }

// getNumber2()

const firstNumber = getNumber();
const secondNumber = getNumber();

const operator = prompt("Gib +, -, / oder * ein");

switch (operator) {
  case "+":
    alert(add(firstNumber, secondNumber));
    break;

  case "-":
    alert(subtract(firstNumber, secondNumber));
    break;

  case "*":
    alert(multiply(firstNumber, secondNumber));
    break;

  case "/":
    alert(divide(firstNumber, secondNumber));
    break;
}
