/*
Para fixar, parte 2
Desenvolva cada exercício a seguir com o uso de funções.
    1. Faça um programa para adicionar pessoas clientes ao array do TrybeBank. A função deve se chamar addCustomer e receber um parâmetro do tipo string e, caso o parâmetro não seja do tipo string, retorne a mensagem: “O parâmetro passado deve ser do tipo string”.

    2. Agora iremos escrever uma função chamada addCustomers que irá adicionar um array de novas pessoas clientes ao nosso array trybeBankCustomers.
    Essa função deve receber dois parâmetros: o array trybeBankCustomers e um novo array de pessoas que devem ser adicionadas.
    Certifique-se de que somente sejam adicionados ao array trybeBankCustomers valores do tipo string. Caso algum elemento contido no segundo parâmetro não seja do tipo string, retorne a mensagem: “Todos os valores precisam ser strings.”. 


*/

const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

// escreva aqui sua função
function addCustomers(customer) {
    if (typeof customer != 'string') {
        return 'O parâmetro passado deve ser do tipo string!';
    }

    trybeBankCustomers.push(customer);
    return 'Pessoa adicionada com sucesso!';
}

function addCustomers(customers) {
    for (let index = 0; index < customers.length; index += 1) {
        if (typeof customers[index] !== 'string') {
            return 'Todos os valores precisam ser strings';
        }
    }
    for (let index = 0; index < customers.length; index += 1) {
        trybeBankCustomers.push(customers[index]);
    }

    return 'Pessoas adicionadas com sucesso!';
}

