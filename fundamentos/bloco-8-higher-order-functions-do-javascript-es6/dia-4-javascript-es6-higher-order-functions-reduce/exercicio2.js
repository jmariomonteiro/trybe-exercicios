// const books = [
//     {
//       id: 1,
//       name: 'As Crônicas de Gelo e Fogo',
//       genre: 'Fantasia',
//       author: {
//         name: 'George R. R. Martin',
//         birthYear: 1948,
//       },
//       releaseYear: 1991,
//     },
//     {
//       id: 2,
//       name: 'O Senhor dos Anéis',
//       genre: 'Fantasia',
//       author: {
//         name: 'J. R. R. Tolkien',
//         birthYear: 1892,
//       },
//       releaseYear: 1954,
//     },
//     {
//       id: 3,
//       name: 'Fundação',
//       genre: 'Ficção Científica',
//       author: {
//         name: 'Isaac Asimov',
//         birthYear: 1920,
//       },
//       releaseYear: 1951,
//     },
//     {
//       id: 4,
//       name: 'Duna',
//       genre: 'Ficção Científica',
//       author: {
//         name: 'Frank Herbert',
//         birthYear: 1920,
//       },
//       releaseYear: 1965,
//     },
//     {
//       id: 5,
//       name: 'A Coisa',
//       genre: 'Terror',
//       author: {
//         name: 'Stephen King',
//         birthYear: 1947,
//       },
//       releaseYear: 1986,
//     },
//     {
//       id: 6,
//       name: 'O Chamado de Cthulhu',
//       genre: 'Terror',
//       author: {
//         name: 'H. P. Lovecraft',
//         birthYear: 1890,
//       },
//       releaseYear: 1928,
//     },
//   ];
  
  // Adicione o código do exercício aqui:

  //Crie uma string com os nomes de todas as pessoas autoras.
//   const nomeAutores = books.reduce((acc, curr) => {
//       acc
//   })

//Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
// const idadeMedia = books.reduce((acc, curr) => acc + (curr.releaseYear - curr.author.birthYear), 0);
// const autores = books.length
// console.log(idadeMedia / autores)

// //Encontre o livro com o maior nome.

// const livroMaiorNome = books.reduce((acc, curr) => {
//     if (acc.name.length > curr.name.length) {
//         return acc;
//     }
//         return curr;
// });

// console.log(livroMaiorNome);

//5- Dada o array de nomes,
// retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];

  const quantidade = names.reduce((acc, curr) => 
      acc + curr.split('').reduce((acumulador, current) => {
        if (current === 'a' && current === 'A') return acumulador + 1;
            return acumulador;           
    }), 0);             
  

  console.log(quantidade)