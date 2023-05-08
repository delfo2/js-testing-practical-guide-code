import { transformToNumber } from "./numbers.js";

export function validateStringNotEmpty(value) {
  if(typeof value !== 'string') {
    throw new TypeError('Invalid Parameter: expect receive a string as value');
  }
  if (value.trim().length === 0) {
    throw new Error('Invalid input - must not be empty.');
  }
  return true;
}

export function validateNumber(number) {
  if (isNaN(number) || typeof number !== 'number') {
    throw new Error('Invalid number input.');
  }
  return true;
}

export function validateNumberAll (numberInput) {
  validateStringNotEmpty(numberInput)
  const number = transformToNumber(numberInput);
  validateNumber(number)
  return number;
}