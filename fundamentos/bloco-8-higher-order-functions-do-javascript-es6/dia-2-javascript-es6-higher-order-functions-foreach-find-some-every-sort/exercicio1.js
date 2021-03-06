const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:
  //Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.(use a função find)
 //FAZENDO COMO CAIQUE ENSINOU:
  const nascida1947 = (array) => {
      return array.find((elemento) => elemento.author.birthYear === 1947).author.name;
  };

  console.log(nascida1947(books));

//   function authorBornIn1947() {
//     return books.find((book) => book.author.birthYear === 1947).author.name;
//   };

//   console.log(authorBornIn1947());

//   function smallerName() {
//     let nameBook;
//     // escreva aqui o seu código
  
//     // Variável nameBook que receberá o valor do menor nome;
//     return nameBook;
//   }
  // Faça uma função que retorne true, se todas as 
    //pessoas autoras nasceram no século XX, ou false, caso contrário.

    //FAZENDO DA FORMA QUE CAIQUE ENSINOU
    // const autoresXX = (array) => {
    //     return array.every((elemento) =>{
    //         return elemento.author.birthYear >= 1901 && elemento.author.birthYear < 2000
    //     });
    // };
    // console.log(autoresXX(books));

    const autoresXX = (array) => {
        return array.some((elemento) => {
            return elemento.author.birthYear >= 1901 && elemento.author.birthYear < 2000
        });
    };
    console.log(autoresXX(books));

//   function everyoneWasBornOnSecXX() {
//     // escreva seu código aqui
//     return  books.every((book) => {
//       book.author.birthYear >= 1901 && book.author.birthYear < 2000;
//     })
//   }; 
  
//   console.log(everyoneWasBornOnSecXX());

  function someBookWasReleaseOnThe80s() {
    // escreva seu código aqui
    return books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990);
  };

  console.log(someBookWasReleaseOnThe80s());