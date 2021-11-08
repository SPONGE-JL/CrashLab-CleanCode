import { add } from './add';

describe('Utils.Calculator.add', () => {
  it('should return 2 when give 1 and 1 as parameters.', () => {
    const result = add(1, 1);
    expect(result).toBe(2);
  });

  it('should only use two integer numbers: if not, throw an new error.', () => {
    const invalidAdd = (): void => {
      add(1, 0.1);
    };
    expect(invalidAdd).toThrowError('Invalid usage: only use essence to add (a: 1 / b: 0.1)');
  });
});
