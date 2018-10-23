(function(){
  /*
  Crie um objeto chamado `person`, com as propriedades:
      `name`: String
      `lastname`: String
      `age`: Number
  Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
  de valor para cada propriedade.
  */
  var person = {
    name: 'Felipe',
    lastname: 'Mathais',
    age: 26
  }
  console.log( 'Propriedades de "person":');

  /*l
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  console.log(Object.keys(person));

  /*
  Crie um array vazio chamado `books`.
  */
  var books = [];

  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */
  books.push({ name: 'As Crônicas de Nárnia', pages: 169 });
  books.push({ name: 'Juventude Abalada', pages: 42 });
  books.push({ name: 'Os quatro pés de um morcego', pages: 666 });
  console.log( '\nLista de livros:' );

  /*
  Mostre no console todos os livros.
  */
  for (let book of books) {
    console.log(book);
  }
  // books.forEach(element => console.log(element.name));

  console.log( '\nLivro que está sendo removido:' );
  /*
  Remova o último livro, e mostre-o no console.
  */
  console.log(books.pop());

  console.log( '\nAgora sobraram somente os livros:' );
  /*
  Mostre no console os livros restantes.
  */
  console.log(books.push());

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  var stringifiedBooks = JSON.stringify(books);
  console.log( '\nLivros em formato string:' );

  /*
  Mostre os livros nesse formato no console:
  */
  console.log(stringifiedBooks);

  /*
  Converta os livros novamente para objeto.
  */
  var booksInArrayAgain = JSON.parse(stringifiedBooks);
  console.log( '\nAgora os livros são objetos novamente:' );

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  books.forEach(book => {
    for (const prop in book) {
      console.log(`"[${prop}]:[${book[prop]}]"`);
    }
  })

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  const myName = ['F', 'e', 'l', 'i', 'p', 'e']
  console.log( '\nMeu nome é:' );

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  console.log(myName.join(''))

  console.log( '\nMeu nome invertido é:' );

  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  console.log(myName.reverse().join(''))

  console.log( '\nAgora em ordem alfabética:' );
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log(myName.sort().join(''))

}())
