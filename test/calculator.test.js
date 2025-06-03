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

  test('adds negative numbers', () => {
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

  test('adds floating point numbers', () => {
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

  test('subtracts two numbers correctly', () => {
    expect(
      calculator.subtract(4, 3)
    ).toBe(1);
  })

  test('subtracts negative numbers', () => {
    expect(
      calculator.subtract(-1, 3)
    ).toBe(-4);

    expect(
      calculator.subtract(1, -3)
    ).toBe(4);

    expect(
      calculator.subtract(-1, -3)
    ).toBe(2);
  });

  test('subtracts floating point numbers', () => {
    expect(
      calculator.subtract(1.5, 1.2)
    ).toBeCloseTo(0.3);

    expect(
      calculator.subtract(4.0, 1.5)
    ).toBeCloseTo(2.5);

    expect(
      calculator.subtract(1.0, 2)
    ).toBeCloseTo(-1.0);
  });
})