import { it, describe, expect} from 'vitest';
import { generateToken } from './async-example';

describe('generateToken()', () => {
    it('should generate a token ', (done) => {
        const email = 'test@test.com';

        generateToken(email, (err, token) => {
            try {
                expect(token).toBeDefined();
                // expect(token).toBe(1);
                done();
            } catch (error) {
                done(error);
            }
        })
    });
});