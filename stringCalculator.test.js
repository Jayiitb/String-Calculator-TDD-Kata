const { add } = require('./stringCalculator');

describe('String Calculator', () => {
  test('empty string returns 0', () => {
    expect(add('')).toBe(0);
  });

  test('single number returns the number', () => {
    expect(add('1')).toBe(1);
  });

  test('two numbers separated by comma returns the sum', () => {
    expect(add('1,5')).toBe(6);
  });

  test('multiple numbers separated by comma returns the sum', () => {
    expect(add('1,2,3,4,5')).toBe(15);
  });

  test('numbers separated by newline returns the sum', () => {
    expect(add('1\n2,3')).toBe(6);
  });

  test('different delimiter specified at the beginning', () => {
    expect(add('//;\n1;2')).toBe(3);
  });

  test('negative numbers throw an exception', () => {
    expect(() => add('-1,2')).toThrow('Negative numbers not allowed: -1');
  });

  test('multiple negative numbers include all in the exception message', () => {
    expect(() => add('2,-4,3,-5')).toThrow(
      'Negative numbers not allowed: -4, -5'
    );
  });
});
