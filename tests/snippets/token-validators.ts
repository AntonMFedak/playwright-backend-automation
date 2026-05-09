import { test, expect } from "@playwright/test";

export async function expectTokenNotEmpty(token: string) {
    await test.step('Validate token is not empty', async () => {
        test.info().annotations.push({ 
            type: 'Token Validation Snippet', 
            description: '@TokenNotEmpty'
        });
        expect(token).not.toBeFalsy();
    });
}

export async function expectTokenBeString(token: string) {
    await test.step('Validate token is a string', async () => {
        test.info().annotations.push({ 
            type: 'Token Validation Snippet', 
            description: '@TokenIsString'
        });
        expect(typeof token).toBe('string');
    });
}

export async function expectTokenToBeNull(token: string | null) {
    await test.step('Validate token is null', async () => {
        test.info().annotations.push({ 
            type: 'Token Validation Snippet', 
            description: '@TokenIsNull'
        });
        expect(token).toBeNull();
    });
}