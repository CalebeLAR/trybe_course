const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// 1. Copie esse arquivo e edite apenas ele.
// 1.1. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

//      Por interferencia da classe .tech definida em style.css, que aplica uma
//      translação vertical de -20px

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando este for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como é possível fazer isso?
//      Dica: Lembre-se do método `.classList.remove`.
//      É possivel se pedirmos para o addEventListener, apos remover o elemento de classe .tech,
//      addicionar outra classe .tech ao target do evento, como feito na linha 29
const listLI = document.getElementsByTagName('li');
for (let LI of listLI) {
    LI.addEventListener('click', removeClassTech);
    LI.addEventListener('click', appendClassTech);
}

function removeClassTech(event) {
    const techLI = document.querySelector('.tech');

    if (techLI) {
        techLI.classList.remove('tech');
    }
}

function appendClassTech(event) {
    const techLI = document.querySelector('.tech');
    event.target.classList = 'tech';
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech'.
const alterTechTextBox = document.getElementById('input');
alterTechTextBox.addEventListener('keyup', updateClassTechColor);

function updateClassTechColor(event) {
    const techLI = document.querySelector('.tech');

    techLI.style.backgroundColor = event.target.value;
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy',
// redirecione para alguma página.
// 4.1. Que tal redirecionar para seu portfólio? Dica: Lembre-se dos métodos
// `window.location.replace` e `window.open`.
const mySpotrybefyH1 = document.getElementById('my-spotrybefy');
mySpotrybefyH1.addEventListener('dblclick', redirectMySpotrybefy);

function redirectMySpotrybefy(event) {
    window.open('https://github.com/CalebeLAR?tab=repositories');
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo.
function gerarCorAleatoria() {
    // Gera três componentes RGB aleatórios
    const componenteR = Math.floor(Math.random() * 256).toString(16);
    const componenteG = Math.floor(Math.random() * 256).toString(16);
    const componenteB = Math.floor(Math.random() * 256).toString(16);

    // Converte os componentes para formato hexadecimal
    const corHexadecimal = `#${componenteR.padStart(
        2,
        '0'
    )}${componenteG.padStart(2, '0')}${componenteB.padStart(2, '0')}`;

    return corHexadecimal;
}

mySpotrybefyH1.addEventListener('mouseover', changeColorMySpotrybefy);
function changeColorMySpotrybefy(event) {
    event.target.style.color = gerarCorAleatoria();
}

