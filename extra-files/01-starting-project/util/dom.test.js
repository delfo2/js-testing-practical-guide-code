import fs from 'fs';
import path from 'path';
import {it, expect, vi, beforeEach} from 'vitest';
import { Window } from 'happy-dom'

import { showError } from './dom';

const HtmlDocPath = path.join(process.cwd(), 'index.html');
const HtmlDocContent = fs.readFileSync(HtmlDocPath).toString();

const window = new Window();
const document = window.document;
vi.stubGlobal('document', document);

beforeEach(() => {
    document.body.innerHTML = '';
    document.write(HtmlDocContent);
})

it('should create a paragraph element in div"errors"', () => {
    showError('test');
    const divEl = document.getElementById('errors');
    const paragraphDiv = divEl.firstElementChild;

    expect(paragraphDiv).not.toBeNull();
});

it('should not contain an error paragraph in div with id="errors"', () => {
    const divEl = document.getElementById('errors');
    const paragraphDiv = divEl.firstElementChild;

    expect(paragraphDiv).toBeNull();
});

it('should contain an error message with provided message', () => {
    const errorMessage = 'test';

    showError(errorMessage);
    const divEl = document.getElementById('errors');
    const paragraphDiv = divEl.firstElementChild;

    expect(paragraphDiv.textContent).toBe(errorMessage);
});
