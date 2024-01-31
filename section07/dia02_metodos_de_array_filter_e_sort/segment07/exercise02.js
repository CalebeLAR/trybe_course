// Para fixar
// Exercício 1

// A nova tarefa do seu time de desenvolvimento é organizar o sistema de
// pessoas colaboradoras de uma rede de mercados. Para isso:
//     Utilize o sort para ordenar o array pelo nome das pessoas em ordem
//     alfabética.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione seu código aqui
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);
