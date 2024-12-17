// Test suite
const { test, expect } = require('@jest/globals');
const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('./testFunctions');

// Tests for capitalize function
test('capitalize capitalizes the first letter of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('world')).toBe('World');
});

// Tests for reverseString function
test('reverseString reverses a string', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('world')).toBe('dlrow');
});

// Tests for calculator object
test('calculator performs basic operations', () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.subtract(5, 3)).toBe(2);
  expect(calculator.multiply(4, 3)).toBe(12);
  expect(calculator.divide(6, 3)).toBe(2);
});

// Tests for caesarCipher function
test('caesarCipher shifts characters correctly', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

// Tests for analyzeArray function
test('analyzeArray returns correct object', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});
