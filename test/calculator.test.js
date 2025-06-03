import { Calculator } from "../js/calculator";

describe('Calculator class', () => {
  
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('adds two numbers correctly', () => {
    expect(
      calculator.add(1, 3)
    ).toBe(4);
  });

  test('accepts negative numbers', () => {
    expect(
      calculator.add(-1, 3)
    ).toBe(2);

    expect(
      calculator.add(1, -3)
    ).toBe(-2);

    expect(
      calculator.add(-1, -3)
    ).toBe(-4);
  });

  test('accepts floating point numbers', () => {
    expect(
      calculator.add(1.5, 1.2)
    ).toBe(2.7);

    expect(
      calculator.add(1.0, 1.0)
    ).toBe(2.0);

    expect(
      calculator.add(1.0, 2)
    ).toBe(3.0);
  });
})