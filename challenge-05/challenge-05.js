/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1, 'felipe', 3 * 20, 4.947198263982, {name: 'Felipe'}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function indexOf(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(arr[1]); //felipe

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function indexOf(arr, index) {
    return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr = [1, 'felipe', 3 * 20, 4.947198263982, {name: 'Felipe'}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(indexOf(arr, 0));
console.log(indexOf(arr, 1));
console.log(indexOf(arr, 2));
console.log(indexOf(arr, 3));
console.log(indexOf(arr, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(name) {
    var books = {
        "Javascript. O Guia Definitivo": {
            pages: 1080,
            author: "David Flanagam",
            publisher: "Bookman"
        },
        "Python para Pentest": {
            pages: 240,
            author: "Daniel Moreno",
            publisher: "Novatec"
        },
        "Construindo aplicações com NodeJS - 2ª edição": {
            pages: 216,
            author: "William Bruno Moraes",
            publisher: "Novatec"
        },
    };

    return !name ? books : books[name];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro Javascript. O Guia Definitivo tem ${book("Javascript. O Guia Definitivo").pages} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro Javascript. O Guia Definitivo é ${book("Javascript. O Guia Definitivo").author}`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro Javascript. O Guia Definitivo foi publicado pela editora ${book("Javascript. O Guia Definitivo").publisher}`);
