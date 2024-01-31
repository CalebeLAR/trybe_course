// Para fixar
// Exercício 1

// A nova tarefa do seu time de desenvolvimento é organizar o sistema de
// pessoas colaboradoras de uma rede de mercados. Para isso:
//     Utilize o sort para ordenar o array pela idade das pessoas em ordem
//     crescente e depois decrescente

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione seu código aqui
people.sort((a, b) => a.age - b.age);
console.log(people);


people.sort((a, b) => b.age - a.age);
console.log(people);