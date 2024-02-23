const createItem = require('./createItem');

describe('a função createItem', () => {
  it('cria um item válido', () => {
    const result = createItem('validItem', "unit", 1, 1);

    expect(result).toHaveProperty('name', 'validItem');
    expect(result).toHaveProperty('quantity', 1);
    expect(result).toHaveProperty('unit', "unit");
    expect(result).toHaveProperty('price', 1);
  });

  it('utiliza zero como quantidade padrão', () => {
    const result = createItem('quantityDefaultItem', "unit", 1);

    expect(result).toHaveProperty('quantity', 0);
  });

  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow(Error);
  });

  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => createItem()).toThrow(
      new Error('O nome do item deve ser uma string')
    );
  });
  it('Lança um erro se o preço é negativo', () => {
    expect(() => createItem('negativePriceItem', 1, -1, 1)).toThrow(
      new Error('O preço do item deve ser maior que zero')
    );
  });
  it('Lança um erro se o preço é zero', () => {
    expect(() => createItem('priceZeroItem', 1, 0, 1)).toThrow(
      new Error('O preço do item deve ser maior que zero')
    );
  });
});
