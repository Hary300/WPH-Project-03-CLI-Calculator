'use strict';
const prompt = require('prompt-sync')();

function getValidNumberInput(promptMessage) {
  while (true) {
    const firstInput = prompt(promptMessage).trim();
    if (firstInput === '') {
      console.log('');
      console.log('⚠️');
      console.log('<=== Input cannot be empty ===>');
      console.log('⚠️');
      console.log('');
      continue;
    }

    const firstNumber = Number(firstInput);
    if (!Number.isFinite(firstNumber)) {
      console.log('');
      console.log('⚠️');
      console.log('<=== Input is not valid. Only number ===>');
      console.log('⚠️');
      console.log('');
    } else {
      return firstNumber;
    }
  }
}

function getValidOperatorInput(promptMessage) {
  while (true) {
    console.log('Operator (+, -, *, /, %, **)');
    const operator = prompt(promptMessage).trim();
    if (
      operator === '+' ||
      operator === '-' ||
      operator === '*' ||
      operator === '/' ||
      operator === '%' ||
      operator === '**'
    ) {
      return operator;
    }
    console.log('');
    console.log('⚠️');
    console.log('<=== Operator is not valid  ===>');
    console.log('⚠️');
    console.log('');
  }
}

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

function modulo(a, b) {
  return a % b;
}

function power(a, b) {
  return a ** b;
}

while (true) {
  let validFirstNumber = getValidNumberInput('Input The First Number : ');
  let validOperator = getValidOperatorInput('Input Operator: ');
  let validSecondNumber;

  if (validOperator === '/') {
    while (true) {
      let secondNumber = getValidNumberInput('Input The Second Number : ');
      if (secondNumber !== 0) {
        validSecondNumber = secondNumber;
        break;
      }
      console.log('');
      console.log('⚠️');
      console.log('<=== Error: Division by zero! ===>');
      console.log('⚠️');
      console.log('');
    }
  } else {
    validSecondNumber = getValidNumberInput('Input The Second Number : ');
  }

  let result;
  switch (validOperator) {
    case '+':
      result = add(validFirstNumber, validSecondNumber);
      break;
    case '-':
      result = subtract(validFirstNumber, validSecondNumber);
      break;
    case '*':
      result = multiply(validFirstNumber, validSecondNumber);
      break;
    case '/':
      result = divide(validFirstNumber, validSecondNumber);
      break;
    case '%':
      result = modulo(validFirstNumber, validSecondNumber);
      break;
    case '**':
      result = power(validFirstNumber, validSecondNumber);
      break;
  }

  console.log(
    'Calculation: ' +
      validFirstNumber +
      ' ' +
      validOperator +
      ' ' +
      validSecondNumber
  );
  console.log('The result: ' + result);

  if (!Number.isFinite(result)) {
    console.log('=========');
    console.log('NOTES');
    console.log('No notes');
    console.log('=========');
  } else {
    console.log('=========');
    console.log('NOTES');

    if (result < 0) {
      console.log('1. ' + result + ' is negative');
    } else if (result > 0) {
      console.log('1. ' + result + ' is positive');
    } else {
      console.log('1. ' + result + ' is zero');
    }

    if (Number.isInteger(result)) {
      console.log('2. ' + result + ' is integer');
      result % 2 === 0
        ? console.log('3. ' + result + ' is even')
        : console.log('3. ' + result + ' is odd');
    } else {
      console.log('2. ' + result + ' is floating-point');
      console.log('3. Cannot determine even/odd');
    }

    console.log('=========');
  }

  let again;
  while (true) {
    const confirm = prompt('You want more count (y/n)?').trim().toUpperCase();
    if (confirm === 'Y' || confirm === 'N') {
      again = confirm;
      break;
    } else {
      console.log('');
      console.log('⚠️');
      console.log('<=== Invalid keyword!! ===>');
      console.log('⚠️');
      console.log('');
    }
  }
  if (again === 'N') {
    console.log('Thank you');
    break;
  }
}
