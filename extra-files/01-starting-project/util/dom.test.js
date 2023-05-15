import fs from 'fs';
import path from 'path';
import {it, expect, vi} from 'vitest';
import { Window } from 'happy-dom'

import { showError } from './dom';

const HtmlDocPath = path.join(process.cwd(), 'index.html');
const HtmlDocContent = fs.readFileSync(HtmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(HtmlDocContent);
vi.stubGlobal('document', document);

it('first test ', () => {
    showError('test');
});