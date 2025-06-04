import { analyzeArray } from "../js/analyze-array";

describe('Analyze Array function', () => {
  test('calculates average correctly', () => {
    expect(
      analyzeArray([1,8,3,4,2,6]).average
    ).toBe(4);
  });

  test('calculates min correctly', () => {
    expect(
      analyzeArray([1,8,3,4,2,6]).min
    ).toBe(1);
  });

  test('calculates max correctly', () => {
    expect(
      analyzeArray([1,8,3,4,2,6]).max
    ).toBe(8);
  });

  test('calculates length correctly', () => {
    expect(
      analyzeArray([1,8,3,4,2,6]).length
    ).toBe(6);
  });

  test('returns object with all properties defined', () => {
    expect(
      analyzeArray([1,8,3,4,2,6])
    ).toStrictEqual(
      {
        average: 4,
        min: 1,
        max: 8,
        length: 6
      }
    )
  })
});