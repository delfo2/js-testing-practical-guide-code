import { it, expect } from 'vitest';
import { add } from './math';

it('should summarize all numbers values in an array', () => {
    const numbers = [1,3];
    const result = add(numbers);

    const expectResult = numbers.reduce((a,b) => a + b, 0);
    expect(result).toBe(expectResult);
});

it('should receive a string as parament', () => {
    const numbers = ['1', '1'];
    const result = add(numbers);

    const expectResult = numbers.reduce((a,b) => a + +b, 0);
    expect(result).toBe(expectResult);
});

it('should yield NaN if a least one number is invalid', () => {
    const arr = ['array', 1];
    const result = add(arr);
    expect(result).toBeNaN();
});

it('should be 0 if array is empty', () => {
    
});

it('should throw a Error if array is empty', () => {
    const expectFn = () => {add()};

    expect(expectFn).toThrowError();
})