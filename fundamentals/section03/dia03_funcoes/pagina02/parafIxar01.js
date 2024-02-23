/*
Para fixar, parte 1

Desenvolva o exercício a seguir com o uso de funções.

Considere a variável balance, que representa a quantia em conta da pessoa cliente do TrybeBank e escreva quatro funções que:

Adiciona um valor ao balance;
Subtraia um valor do balance;
Multiplique o valor do balance por uma taxa;
Divida o valor do balance.
*/ 



const balance = 100;

function sumBalance(value) {
    return balance + value;
}

function subBalance(value) {
    return balance - value;
}

function multBalance(value) {
    return balance * value;
}

function divBalance(value) {
    return (balance / value).toFixed(2);
}
