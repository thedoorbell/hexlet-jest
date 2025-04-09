import reverse from '../src/index.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('reverse', () => {
  const text = readFixtureFile('text.txt').trim();
  const result = readFixtureFile('result.txt').trim();

  expect(reverse(text)).toEqual(result);

  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});
