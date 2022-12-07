import calculate from '../logic/calculate';

describe('Tetsting the calculate.js', () => {
  test('Expect return of an object', () => {
    expect(typeof calculate({}, 'AC')).toBe('object');
  });

  test('Test next is set to null on AC', () => {
    expect(calculate({}, 'AC').next).toBe(null);
  });
  test('Test total is set to null on AC', () => {
    expect(calculate({}, 'AC').total).toBe(null);
  });

  test('Test operation is set to null on AC', () => {
    expect(calculate({}, 'AC').operation).toBe(null);
  });

  test('Test operation is set to + ', () => {
    expect(calculate({}, '+').operation).toBe('+');
  });

  test('Test operation is set to - ', () => {
    expect(calculate({}, '-').operation).toBe('-');
  });

  test('Test operation is set to x ', () => {
    expect(calculate({}, 'x').operation).toBe('x');
  });

  test('Test operation is set to x ', () => {
    expect(calculate({}, 'x').operation).toBe('x');
  });

  test('Test number is set with number alredy existing ', () => {
    expect(calculate({ next: '6' }, '6').next).toBe('66');
  });

  test('Test number is set with number alredy existing ', () => {
    expect(calculate({ next: '637' }, '6').next).toBe('6376');
  });

  test('Test number the equal', () => {
    expect(calculate({ next: '6', total: 6, operation: '+' }, '=').total).toBe('12');
  });
});