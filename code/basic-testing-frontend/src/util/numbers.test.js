import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

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