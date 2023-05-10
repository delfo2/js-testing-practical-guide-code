import { vi } from "vitest";

export const promises = {
    writeData: vi.fn((storagePath, data) => {
        return new Promise((resolve, reject) => {
            resolve();
        })
    })
}