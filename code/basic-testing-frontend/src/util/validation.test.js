import { it, expect, describe } from 'vitest';
import { validateStringNotEmpty, validateNumber } from './validation';

describe('validateStringNotEmpty', () => {
    it('should throw an erro if string is empty', () => {
        const string = '';
        const resultFn = () => {
            validateStringNotEmpty(string);
        }
        expect(resultFn).toThrowError(/Invalid/);
    });
    
    it('should not throw an erro if string is fulfill', () => {
        const string = 'test';
        const resultFn = () => {
            validateStringNotEmpty(string);
        }
        expect(resultFn).not.toThrowError(/Invalid/);
    });

    it('should return true if string is fulfill', () => {
        const string = 'test';
        const result = validateStringNotEmpty(string);    
        expect(result).toBeTruthy();
    });

    it('should throw an erro if receive invalid values', () => {
        const arr = [];
        const obj = {};
        const boolean = true;
        const resultFn = () => {
            validateStringNotEmpty(arr);
        }
        const resultFn2 = () => {
            validateStringNotEmpty(obj);
        }
        const resultFn3 = () => {
            validateStringNotEmpty(boolean);
        }
        expect(resultFn).toThrowError(/Invalid/);
        expect(resultFn2).toThrowError(/Invalid/);
        expect(resultFn3).toThrowError(/Invalid/);
    });
})

describe('validateNumber', () => {
    it('should throw an error if the parameter is invalid', () => {
        const invalid1 = '1';
        const invalid2 = [1];
        const invalid3 = 'test';
        const invalid4 = undefined;
        const invalid5 = NaN;

        const result1Fn = () => {
            validateNumber(invalid1);
        } 
        const result2Fn = () => {
            validateNumber(invalid2);
        } 
        const result3Fn = () => {
            validateNumber(invalid3);
        } 
        const result4Fn = () => {
            validateNumber(invalid4);
        } 
        const result5Fn = () => {
            validateNumber(invalid5);
        } 

        expect(result1Fn).toThrowError(/Invalid/);
        expect(result2Fn).toThrowError(/Invalid/);
        expect(result3Fn).toThrowError(/Invalid/);
        expect(result4Fn).toThrowError(/Invalid/);
        expect(result5Fn).toThrowError(/Invalid/);
    });

    it('should return true if parameter is a number', () => {
        const number = 1;

        const result = validateNumber(number);

        expect(result).toBeTruthy();
    });
})