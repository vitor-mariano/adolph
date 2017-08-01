import {
  clearString,
} from './';

describe('Lambada', () => {
  test('clearString', () => {
    expect(
      clearString('José Raphaël'),
    ).toBe('jose raphael');
  });
});
