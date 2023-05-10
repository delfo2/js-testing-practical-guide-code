import { it, expect } from 'vitest';
import { validateNotEmpty } from './validation';

it('should throw an error if the string provided is empty', () => {
    const string = '';
    const errorMessage = 'The string shouldnt be empty';
    const testFn = () => {
        validateNotEmpty(string, errorMessage);
    }
    expect(testFn).toThrow();
});
it('should throw an error if arguments is empty', () => {
    const testFn = () => {
        validateNotEmpty();
    }
    expect(testFn).toThrow();
});
it('should do nothing if the string provided isnt empty', () => {
    const string = 'test';
    const testFn = () => {
        validateNotEmpty(string);
    }
    expect(testFn).not.toThrow();
});