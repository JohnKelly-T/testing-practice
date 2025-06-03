import { reverseString } from "../js/reverse-string"

describe('Reverse String Function', () => {
  test('reverses lowercase string', () => {
    expect(
      reverseString('apple')
    ).toBe('elppa')
  });
  
  test('reverses uppercase strings', () => {
    expect(
      reverseString('APPLE')
    ).toBe('ELPPA')
  });

  test('reverses with capitalization', () => {
    expect(
      reverseString('Apple')
    ).toBe('elppA')
  });

  test('reverses number strings', () => {
    expect(
      reverseString('1234')
    ).toBe('4321')
  });

  test('reverses special characters', () => {
    expect(
      reverseString('!@#$%')
    ).toBe('%$#@!')
  });
});