import {expect, it, describe} from 'vitest';
import { extractPostData } from './posts';

describe('extractPostData()', () => {
    const testTitle = 'test';
    const testContent = 'test';

    const dummyForm = {
        title: testTitle,
        content: testContent,
        get (id) {
            return this[id];
        }
    }
    it('should extract title and content from form provided', () => {
        const result = extractPostData(dummyForm);
        
        expect(result.title).toBe(testTitle);
        expect(result.content).toBe(testContent);
    });
});