import { caesarCipher } from "../js/caesar-cipher";

describe('Caesar Cipher function', () => {

  test('shifts characters correctly', () => {
    expect(
      caesarCipher('abcde', 3)
    ).toBe('defgh');
  });

  test('preserves character case', () => {
    expect(
      caesarCipher('HeLLo', 3)
    ).toBe('KhOOr');
  });

  test('wraps from z to', () => {
    expect(
      caesarCipher('xyz', 3)
    ).toBe('abc');
  });

  test('does not shift punctuation', () => {
    expect(
      caesarCipher('Hello, World!', 3)
    ).toBe('Khoor, Zruog!');
  });
});