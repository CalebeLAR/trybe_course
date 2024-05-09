import { vi } from 'vitest';
import * as math from './math';

test("#somar", () => {  
  const mockSomar = vi
    .spyOn(math, 'somar')
    .mockImplementation((a, b) => Promise.resolve(a - b));

  const result = math.somar(5, 1);
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar).toHaveBeenLastCalledWith(5, 1);
  expect(result).resolves.toBe(4);

  // restaurando a implementação original
  mockSomar.mockRestore();
  expect(math.somar(5, 1)).resolves.toBe(6);
});