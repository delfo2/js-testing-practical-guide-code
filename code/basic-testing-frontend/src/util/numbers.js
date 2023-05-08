import { validateNumberAll } from "./validation.js";
import { extractNumbers } from "../parser.js";

export function transformToNumber(value) {
  if(!value) {
    throw new TypeError('TypeError: expected receive a argument');
  }
  return +value;
}

export function numbersContructor (numberInputs) {
  let numbers = [];
  
  if(typeof numberInputs !== typeof numbers) {
    throw new TypeError('Invalid parameter input.');
  }
  
  for (let numberInput of numberInputs) {
    numberInput = validateNumberAll(numberInput)
    numbers.push(numberInput);
  }
  return numbers;
}

export function getNumbers (form) {
  const formData = new FormData(form);
  return extractNumbers(formData);
}