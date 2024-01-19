// Para praticar, considere o exemplo de um boletim escolar
// Implemente uma lógica que verifique a média da pessoa estudante. Para isso, considere as seguintes informações:
//   Escreva uma função que receba, como parâmetro, 4 valores do tipo number. Caso o valor recebido como parâmetro não seja do tipo number, lance uma exceção.
//   Lembre-se de quebrar problemas grandes em partes menores, a fim de facilitar sua manutenção e seu entendimento.
// De olho na dica 👀: Aproveite para colocar em prática o uso do throw e try/catch.

const calculateAverage = (n1, n2, n3, n4) => {
  try {
    validateAverage(n1, n2, n3, n4);
    let sum = n1 + n2 + n3 + n4;
    let media = sum / 4;
    return media;
  } catch (error) {
    return error.message;
  }
};
console.log(calculateAverage(5, 6, 7, '8')); // Atenção! Os valores devem ser numéricos
