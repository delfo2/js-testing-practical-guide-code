import { it, expect, describe } from "vitest";
import { transformToNumber, numbersContructor } from "./numbers";

describe('transformToNumber()', () => {
    it('should transform a string number to a number of type number', () => {
        const string = '1';
        const result = transformToNumber(string);
        expect(result).toBe(+string);
    });
    
    it('should throw an error if no arguments is received', () => {
        const resultFn = () => {
            transformToNumber()
        };
        expect(resultFn).toThrowError(TypeError);
    });
    
    it('should yield NaN if a invalid value is used insted a string', () => {
        const arr = ['1', '1'];
        const obj = {};
    
        const result = transformToNumber(arr);
        const result2 = transformToNumber(obj);
    
        expect(result).toBeNaN();
        expect(result2).toBeNaN();
    })
})

describe('numbersContructor', () => {
    it('should return an array of numbers if a array of string numbers is proviced', () => {
        const arr = ['1', '2'];
        const result = numbersContructor(arr);
        expect(result[0]).toBeTypeOf("number");
    })
    it('should throw an error if a invalid value is proviced', () => {
        const arr1 = ['', 1];
        const arr2 = [NaN, false];
        const arr3 = ['invalid', Object];
        const result1 = () => numbersContructor(arr1);
        const result2 = () => numbersContructor(arr2);
        const result3 = () => numbersContructor(arr3);
        expect(result1).toThrow();
        expect(result2).toThrow();
        expect(result3).toThrow();
    })
    it('should throw an error if the value proviced is empty', () => {
        const result1 = () => numbersContructor();
        expect(result1).toThrow();
    })
    it('should throw an error if a array of numbers is proviced', () => {
        const arr = [1, 2];
        const result1 = () => numbersContructor(arr);
        expect(result1).toThrow();
    })
    it('should throw an error if a string is proviced instead an array', () => {
        const arr = '1';
        const result1 = () => numbersContructor(arr);
        expect(result1).toThrow();
    })
})