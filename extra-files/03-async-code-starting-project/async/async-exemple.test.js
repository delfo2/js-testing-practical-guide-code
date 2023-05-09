import { it, describe, expect} from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

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

describe('generateTokenPromise()', () => {
    it('should generate a token ', () => {
        const email = 'test@test.com';
        
        expect(generateTokenPromise(email)).resolves.toBeDefined();
    });
    it('should generate a token with async/await', async () => {
        const email = 'test@test.com';
        
        const token = await generateTokenPromise(email);

        return expect(token).toBeDefined();
    });
    it('should throw an error if no arguments is proviced ', () => {
        const tokenFN = async () => {
            await generateTokenPromise();
        } 

        expect(tokenFN).rejects.toThrow();
    });
})