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
});