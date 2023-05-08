import { numbersContructor } from "./util/numbers.js";
import { add } from './math.js';

export function highLevelUserMensage (string) {
    let resultText = '';
    if (string === 'invalid') {
      resultText = 'Invalid input. You must enter valid numbers.';
    } else if (string !== 'no-calc') {
      resultText = 'Result: ' + string;
    }
  
    return resultText;
}

export function generateOutputMensage (numberInputs) {
  let result = '';
  
  try {
    const numbers = numbersContructor(numberInputs);
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }

  return result;
}

export function outputUpdate (string) {
    const output = document.getElementById('result');
    output.textContent = highLevelUserMensage(string);
}