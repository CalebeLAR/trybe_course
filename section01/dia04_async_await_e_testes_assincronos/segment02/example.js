// Essa função retorna o número 1.
function foo() {
    return 'ok';
}

// Essa função retorna uma Promise (que resolve no número 1).
async function bar() {
    return new Promise((res, rej) => {
        setTimeout(() => res(`ok`), 1000);
    });
}

async function gas() {
    return new Promise((res, rej) => {
        setTimeout(() => res(`ok`), 1003);
    });
}

console.log('USANDO ASYNC AWAIT');
console.log('passo 1', foo());

const b1 = await gas(1);
console.log('passo 2', b1);

const b2 = await bar(2);
console.log('passo 3', b2);

console.log('passo 4', foo());

console.log('USANDO THEN');
console.log('passo 1', foo());

gas().then((res) => console.log('passo 2', res));

bar().then((res) => console.log('passo 3', res));

console.log('passo 4', foo());
