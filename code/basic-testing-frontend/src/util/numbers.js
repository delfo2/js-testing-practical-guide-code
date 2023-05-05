export function transformToNumber(value) {
  if(!value) {
    throw new TypeError('TypeError: expected receive a argument');
  }
  return +value;
}

