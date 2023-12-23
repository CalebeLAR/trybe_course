/**
 Para fixar

Após ter conhecido diferentes maneiras de associar chaves e valores a um objeto,
que tal praticar?
    Adicione as propriedades email, fone, userGithub e linkedIn ao objeto
    customer (do exemplo anterior), chamando a função addProperty.
*/


const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Software Engineer',
};

const addProperty = (obj, key, value) => {
    if (typeof obj[key] === 'undefined') {
        obj[key] = value;
    }
};

addProperty(customer, 'email', 'roberto@gmail.com');
addProperty(customer, 'fone', '55 955555555');
addProperty(customer, 'userGithub', 'github/roberto');
addProperty(customer, 'linkedIn', 'roberto.dev');
