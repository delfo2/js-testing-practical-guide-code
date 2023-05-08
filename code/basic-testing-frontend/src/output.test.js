import { it, describe, expect } from 'vitest';
import { highLevelUserMensage } from './output';

describe('highLevelUserMensage()', () => {
    it('should return a string, no matter which value is passed in', () => {
      const val1 = 1;
      const val2 = 'invalid';
      const val3 = false;
      
      const result1 = highLevelUserMensage(val1);
      const result2 = highLevelUserMensage(val2);
      const result3 = highLevelUserMensage(val3);
  
      expect(result1).toBeTypeOf('string');
      expect(result2).toBeTypeOf('string');
      expect(result3).toBeTypeOf('string');
    });
  
    it('should return a string that contains the calculation result if a number is provided as a result', () => {
      const result = 5;
  
      const resultText = highLevelUserMensage(result);
  
      expect(resultText).toContain(result.toString());
    });
  
    it('should return an empty string if "no-calc" is provided as a result', () => {
      const result = 'no-calc';
  
      const resultText = highLevelUserMensage(result);
  
      expect(resultText).toBe('');
    });
  
    it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
      const result = 'invalid';
  
      const resultText = highLevelUserMensage(result);
  
      expect(resultText).toContain('Invalid');
    });
});