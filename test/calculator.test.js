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
    ).toBeCloseTo(2.7);

    expect(
      calculator.add(1.0, 1.0)
    ).toBeCloseTo(2.0);

    expect(
      calculator.add(1.0, 2)
    ).toBeCloseTo(3.0);
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

  test('multiplies two numbers correctly', () => {
    expect(
      calculator.multiply(4, 3)
    ).toBe(12);
  })

  test('multiplies negative numbers', () => {
    expect(
      calculator.multiply(-1, 3)
    ).toBe(-3);

    expect(
      calculator.multiply(2, -3)
    ).toBe(-6);

    expect(
      calculator.multiply(-1, -3)
    ).toBe(3);
  });

  test('multiplies floating point numbers', () => {
    expect(
      calculator.multiply(1.5, 1.2)
    ).toBeCloseTo(1.8);

    expect(
      calculator.multiply(4.0, 1.5)
    ).toBeCloseTo(6.0);

    expect(
      calculator.multiply(1.0, 2)
    ).toBeCloseTo(2.0);
  });

  test('divides two numbers correctly', () => {
    expect(
      calculator.divide(12, 3)
    ).toBe(4);
  })

  test('divides negative numbers', () => {
    expect(
      calculator.divide(-1, 4)
    ).toBe(-0.25);

    expect(
      calculator.divide(6, -3)
    ).toBe(-2);

    expect(
      calculator.divide(-10, -5)
    ).toBe(2);
  });

  test('divides floating point numbers', () => {
    expect(
      calculator.divide(1.5, 0.3)
    ).toBeCloseTo(5.0);

    expect(
      calculator.divide(3.0, 1.5)
    ).toBeCloseTo(2.0);

    expect(
      calculator.divide(1.0, 2)
    ).toBeCloseTo(0.5);
  });
});