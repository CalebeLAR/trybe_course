test.skip('toBe: igualdade estrita', () => {
    expect(5).toBe('5'); // fail
})


test.skip('toEqual: igualdade de array e object', () => {
  const arr = [1, 2, 3];
  const obj = { a: 1, b: 2, c: 3 };

  expect(arr).toBe([1, 2, 3]); // fails
  expect(obj).toBe({ a: 1, b: 2, c: 3 }); // fails
  expect(arr).toEqual([1, 2, 3]); // OK
  expect(obj).toEqual({ a: 1, b: 2, c: 3 }); // OK
});

test('Tipos primitivos: a atribuição ocorre por valor', () => {
    let gemeoUm = 'Cabelo comprido';
    let gemeoDois = gemeoUm;
    
    gemeoUm = 'Careca';

    expect(gemeoUm).toBe('Careca');
    expect(gemeoDois).toBe('Cabelo comprido');
});

test('Tipos object: a atribuição ocorre por referência, ou seja, cada vez que um objeto é criado, cria-se um novo espaço na memória para ele. ', () => {
  let myName = { firstName: 'Pedro' };
  let identity = myName;

  myName.firstName = 'Carol';

  console.log(myName.firstName); // Carol
  console.log(identity.firstName); // Carol

  expect(myName.firstName).toBe('Carol');
  expect(identity.firstName).toBe('Carol');
});
