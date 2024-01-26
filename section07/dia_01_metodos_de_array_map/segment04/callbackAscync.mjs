function calcular(a, b, operacao) {
  return operacao(a, b);
}

function soma(x, y) {
  return x + y;
}

function multiplicacao(x, y) {
  return x * y;
}

console.log(calcular(5, 3, soma)); // Resultado: 8
console.log(calcular(5, 3, multiplicacao)); // Resultado: 15

function realizarOperacaoAsync(a, b, operacao, callback) {
  setTimeout(() => {
    const resultado = operacao(a, b);
    callback(resultado);
  }, 1000);
}

function exibirResultado(resultado) {
  console.log(`O resultado da operação é: ${resultado}`);
}

realizarOperacaoAsync(10, 5, soma, exibirResultado);
