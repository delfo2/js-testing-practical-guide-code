import { afterEach, describe, it, expect } from 'vitest';
import { HttpError, ValidationError } from './errors';

describe('HttpError()', () => {
    const statusCode = 100;
    const message = 'test';
    const data = 'text';
    const httpError = new HttpError(statusCode, message, data);

    it('should exist at least', () => {
        expect(httpError).toBeDefined();
    })

    it('should have all class properties', () => {
        expect(httpError).toHaveProperty('statusCode');
        expect(httpError).toHaveProperty('message');
        expect(httpError).toHaveProperty('data');
    });

    it('should has all parameters provided in creation', () => {
        expect(httpError.statusCode).toBe(statusCode);
        expect(httpError.message).toBe(message);
        expect(httpError.data).toBe(data);
    });
})

describe('ValidationError()', () => {
    const message = 'text'
    const validationError = new ValidationError(message);

    it('should exist at least', () => {
        expect(validationError).toBeDefined();
    });
    it('should have message property', () => {
        expect(validationError).toHaveProperty('message');
    })
    it('should have the exacly parameter provided in initiation', () => {
        expect(validationError.message).toBe(message);
    })
    it('should throw an error if no parameter is provided', () => {
        const validationErrorFn = () => {
            new ValidationError();
        }
        expect(validationErrorFn).toThrow(TypeError);
    })
});