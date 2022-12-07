import operate from '../logic/operate';

describe('Testing the operate.js', () => {
  test('Test The plus operation', () => {
    expect(operate(2, 4, '+')).toBe('6');
  });

  test('Test The minus operation', () => {
    expect(operate(2, 2, '-')).toBe('0');
  });

  test('Test The divide operation', () => {
    expect(operate(4, 2, '÷')).toBe('2');
  });

  test('Test The divide operation', () => {
    expect(operate(4, 4, 'x')).toBe('16');
  });

  test('Test The modulo operation', () => {
    expect(operate(4, 4, '%')).toBe('0');
  });
});