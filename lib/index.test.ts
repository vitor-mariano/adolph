import {
  clearString,
} from './';

test('clearString', () => {
  expect(
    clearString('José Raphaël'),
  ).toBe('jose raphael');
});
