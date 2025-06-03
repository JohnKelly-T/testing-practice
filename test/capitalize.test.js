import { capitalize } from "../js/capitalize";

describe('Capitalize', () => {
  test('capitalizes the first letter of a word', () => {
    expect(
      capitalize('apple')
    ).toBe('Apple');
  })

  test('does nothing for capitalized words', () => {
    expect(
      capitalize('Orange')
    ).toBe('Orange');
  })

  test('does nothing for numbers', () => {
    expect(
      capitalize('1234')
    ).toBe('1234');
  })

  test('does nothing for special characters', () => {
    expect(
      capitalize('#&*%')
    ).toBe('#&*%');
  })
})