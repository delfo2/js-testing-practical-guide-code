import { it, expect, vi } from "vitest";
import writeData from './io.js';
import { promises as fs }  from 'fs';

vi.mock('fs');
vi.mock('path', () => {
    return {
        default: {
            join: (...args) => {
                return args[args.length - 1];
            }
        }
    }
});

it('should write', () => {
    const data = 'Some dummy data for this demo app';
    const filename = 'text.txt';

    // writeData(data,filename);
    expect(fs.writeData(filename, data)).resolves.toBeUndefined();
    
    // expect(fs.writeFile).toBeCalledWith(filename, data);
});