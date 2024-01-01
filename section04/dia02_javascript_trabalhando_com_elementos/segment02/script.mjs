// Acesse o elemento where-are-you.
const whereAreYou = document.getElementById('where-are-you');

// Acesse parent a partir de where-are-you e adicione uma color a ele.
const parentWhereAreYou = whereAreYou.parentElement;
parentWhereAreYou.style.color = 'pink';

// Acesse o first-child-of-child e adicione um texto a ele.
// Você se lembra dos vídeos da aula anterior? Eles ensinam como fazer isso.
const firstChildOfChild = whereAreYou.firstElementChild;
console.log('first-child-of-child:', firstChildOfChild);

// Acesse o first-child a partir de parent.
let firstChild = parentWhereAreYou.firstElementChild;
console.log('first-child:', firstChild);

// Acesse o first-child a partir de where-are-you.
firstChild = whereAreYou.previousElementSibling;
console.log('first-child by where-are-you:', firstChild);

// Acesse o texto Attention! a partir de where-are-you.
let attention = whereAreYou.nextSibling.textContent;
console.log(attention);

// Acesse o third-child a partir de where-are-you.
let thirdChild = whereAreYou.nextElementSibling;
console.log('third-child by where-are-you:', thirdChild);

// Acesse o third-child a partir de parent.
thirdChild = parentWhereAreYou.lastElementChild.previousElementSibling;
console.log('third-child by parent:', thirdChild);
