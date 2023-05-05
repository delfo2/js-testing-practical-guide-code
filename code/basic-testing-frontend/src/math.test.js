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
    const arr = [];
    const result = add(arr);
    expect(result).toBe(0);
});

it('should throw a Error if function is called without arguments', () => {
    const expectFn = () => {add()};

    expect(expectFn).toThrowError(/iterable/);
})

it('should throw a Error if proviced with multiple arguments instead of an array', () => {
    const a = 1
    const b = 2;
    const expectFn = () => {add(a, b)};

    expect(expectFn).toThrowError(/iterable/);
})