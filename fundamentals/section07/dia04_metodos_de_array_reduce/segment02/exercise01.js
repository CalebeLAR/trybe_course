// Para fixar
// Exercício 1

// Faça uma função que some todos os números pares do
// array numbers usando reduce.

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = numbers.reduce((acc, curr) => {
  if (
    ['0', '2', '4', '6', '8'].includes(String(curr)[String(curr).length - 1])
  ) {
    acc += curr;
  }

  return acc;
}, 0);
console.log(sumPair);
