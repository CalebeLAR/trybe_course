// src/App.test.tsx
import { vi } from 'vitest';


let retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);
let divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;

describe('testes para a fução divisivel por dois', () => {
  test("testa divisivelPorDois mocando a unção retornaNumeroAleatorio", () => {
    retornaNumeroAleatorio = vi.fn().mockReturnValueOnce(2)

    expect(divisivelPorDois()).toBe(true);
    expect(divisivelPorDois()).not.toBeUndefined()
  });

  test("testa divisivelPorDois mocando diretamente divisivel por dois", () => {
    // testando quantas vezes a função foi chamada e qual seu retorno
    const mockDivisivelPorDois = vi.fn()
      .mockReturnValue('default value')
      .mockReturnValueOnce('first call')
      .mockReturnValueOnce('second call')

    divisivelPorDois = mockDivisivelPorDois

    expect(divisivelPorDois).toHaveBeenCalledTimes(0);

    expect(divisivelPorDois()).toBe("first call");
    expect(divisivelPorDois).toHaveBeenCalledTimes(1);

    expect(divisivelPorDois()).toBe("second call");
    expect(divisivelPorDois).toHaveBeenCalledTimes(2);

    expect(divisivelPorDois()).toBe("default value");
    expect(divisivelPorDois).toHaveBeenCalledTimes(3);
  });
});