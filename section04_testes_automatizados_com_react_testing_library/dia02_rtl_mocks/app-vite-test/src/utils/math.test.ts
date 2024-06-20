import { vi } from 'vitest';
import * as math from './math';

test("#somar", () => {
  vi.mock('./math', () => ({
    somar: vi.fn((a: number, b: number) => a + b),
  }));
  
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});


test("#somar usando mockImplementation", () => {
  const mockedMath = {
    somar: vi.fn()
  };
  
  vi.mock('./utils/math', () => mockedMath);

  const func = (a: number, b: number) => a + b;
  
  mockedMath.somar.mockImplementation(func)
  mockedMath.somar(1, 2);

  expect(mockedMath.somar).toHaveBeenCalled();
  expect(mockedMath.somar).toHaveBeenCalledTimes(1);
  expect(mockedMath.somar).toHaveBeenCalledWith(1, 2);
  expect(mockedMath.somar(1, 2)).toBe(3);
});
