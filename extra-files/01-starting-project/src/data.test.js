import {it, describe, expect, vi} from 'vitest'
import { generateReportData } from './data'

describe('generateReportData()', () => {
    it('should execute the function provided as parameter once', () => {
        const logger = vi.fn();
        generateReportData(logger);
        expect(logger).toBeCalled();
    })
    it('should return a string', () => {
        const logger = vi.fn();
        const result = generateReportData(logger);
        expect(result).toBeTypeOf('string');
    })
    it('should return a string even no parameter is provided', () => {
        const result = generateReportData();
        expect(result).toBeTypeOf('string');
    })
})