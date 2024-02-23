// ParaFixar 01

//  1.Recupere o elemento que contém o título da página e altere para o nome de um filme da
//  sua escolha.
const page_title = document.getElementById('page-title');
page_title.innerText = 'O Labirinto do Fauno';

//  2.Recupere o primeiro parágrafo e altere o texto para o resumo do seu filme favorito.
const description = document.querySelector('p');
description.innerHTML = `Em 1944, na Espanha, a jovem Ofélia e sua mãe doente chegam <br>
        ao posto do novo marido de sua mãe, um sádico oficial do exército que está tentando<br>
        reprimir uma guerrilheira. Enquanto explorava um labirinto antigo, Ofélia encontra o<br>
        Pan fauno, que diz que a menina é uma lendária princesa perdida e que ela precisa<br>
        completar três tarefas perigosas a fim de se tornar imortal.`;

//  3.Recupere o subtítulo e altere-o para: Principais informações.
const sub_title = document.getElementById('subtitle');
sub_title.innerText = 'Principais informações';

//  4.Recupere os parágrafos usando getElementsByClassName, e altere a fonte do primeiro
//  parágrafo para itálico.
const paragraphs = document.getElementsByClassName('paragraph-style');
let first_paragraph = paragraphs[0];
first_paragraph.style.fontStyle = 'italic';

//  5.Recupere o segundo parágrafo e coloque as informações principais: Exemplo: Direção:
//  Nome da pessoa que dirigiu o filme, Roteirista: Nome da(s) pessoa(s) responsável(is)
//  pelo roteiro
let second_paragraph = paragraphs[1];
second_paragraph.innerHTML = ` Data de lançamento: 1 de dezembro de 2006 (Brasil) <br>
    Diretor: Guillermo del Toro<br>
    Roteiro: Guillermo del Toro<br>
    Indicações: Oscar de Melhor Direção de Arte, MAIS<br>`;

//  6.Recupere o subtítulo utilizando o getElementsByTagName e altere a cor da fonte para
//  alguma de sua escolha.
sub_title.style.color = 'brown';
