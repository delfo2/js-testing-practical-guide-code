import { generateOutputMensage, outputUpdate } from './src/output.js';
import { getNumbers } from './src/util/numbers.js';

const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();

  const numberInputs = getNumbers(form);
  const result = generateOutputMensage(numberInputs);

  outputUpdate(result);
}

form.addEventListener('submit', formSubmitHandler);
