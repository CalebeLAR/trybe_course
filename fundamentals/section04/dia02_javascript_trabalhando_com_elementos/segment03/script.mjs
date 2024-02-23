// Crie um irmão para elementoOndeVoceEsta.
const elementH1 = document.createElement('h1')
elementH1.innerText = "novo elemento h1"
elementH1.style.color = "pink"

const parent = document.getElementById('elementoOndeVoceEsta').parentElement;
parent.appendChild(elementH1);

// Crie um filho para elementoOndeVoceEsta.
const elementH2 = document.createElement('h2');
elementH2.innerText = 'novo elemento h2';
elementH2.style.color = 'red';

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
elementoOndeVoceEsta.appendChild(elementH2)

// Crie um filho para primeiroFilhoDoFilho.
const elementP = document.createElement('p');
elementP.innerText = 'novo elemento P';

const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild
primeiroFilhoDoFilho.appendChild(elementP)

// A partir desse filho criado, acesse terceiroFilho.
const terceiroFilho = primeiroFilhoDoFilho.parentElement.nextElementSibling
console.log("terceiro filho:", terceiroFilho)


