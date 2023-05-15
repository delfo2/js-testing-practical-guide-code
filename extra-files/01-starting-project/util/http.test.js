import {vi, expect, it} from 'vitest';
import { sendDataRequest } from './http';
import { HttpError } from './errors';

const dummyTestResult = {teskKey: 'test'};
const testFetch = vi.fn((url, options) => {
    return new Promise((resolves, rejects) => {
        if(typeof options.body !== 'string') {
            rejects('Body should be a string');
        }
        const testResult = {
            ok: true,
            json () {
                return new Promise ((resolve, reject) => {
                    resolve(dummyTestResult);
                })
            }
        };
        resolves(testResult);
    })
})
vi.stubGlobal('fetch', testFetch);

it('should return some dummy data if any value is provided', () => {
    const testParameter = {data: 'test'};
    
    return expect(sendDataRequest(testParameter)).resolves.toEqual(dummyTestResult);
})
it('should convert options.body into JSON before sending the request', async () => {
    const testParameter = {data: 'test'};
    let errorMensage;

    try {
        await sendDataRequest(testParameter);
    } catch (error) {
        errorMensage = error;
    }
    expect(errorMensage).not.toBe('Body should be a string');
})

it('should throw an HttpError if status.code is invalid', () => {
    testFetch.mockImplementationOnce((url, options) => {
        return new Promise((resolves, rejects) => {
            const testResult = {
                status : 404,
                ok: false,
                json () {
                    return new Promise ((resolve, reject) => {
                        resolve(dummyTestResult);
                    })
                }
            };
            resolves(testResult);
        })
    });

    const testParameter = {data: 'test'};

    return expect(sendDataRequest(testParameter)).rejects.toBeInstanceOf(HttpError);
});