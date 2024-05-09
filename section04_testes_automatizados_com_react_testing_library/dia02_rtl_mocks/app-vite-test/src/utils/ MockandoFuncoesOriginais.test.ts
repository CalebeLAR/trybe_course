import { vi } from 'vitest';
import * as math from './math';

test("#somar", () => {
  const mockSomar = vi.spyOn(math, 'somar');

  const result = math.somar(1, 2);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar).toHaveBeenCalledWith(1, 2);
  expect(result).resolves.toBe(3);
});