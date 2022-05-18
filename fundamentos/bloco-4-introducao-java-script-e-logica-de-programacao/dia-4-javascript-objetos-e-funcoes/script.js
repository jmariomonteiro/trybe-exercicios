// //fixação 1

// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
//     medals: { 
//         golden: 2, 
//         silver: 3,
//     },
// };

// console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade.");
// console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo " + player.bestInTheWorld.length + " vezes");
// console.log("A jogadora possui " + player.medals.golden + " medalhas de outro e " + player.medals.silver + " medalhas de prata");

//fixação 2

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for (let index in names) {
//       console.log("olá " + index, names[index]);
//   } 

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for (let index in car) {
//       console.log(index, car[index])
//   };

//praticando 
//1 e 2

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim'
//   };

//   console.log("Boas vindas, " + info.personagem)

//3 e 4

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim'
//   };

// //   for (let position in info) {
// //     console.log(position);
// //   };

// for(let properties in info){
//     console.log(info[properties]);
//   }

//5 
// let info = {
//         personagem: 'Margarida',
//         origem: 'Pato Donald',
//         nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//         recorrente: 'Sim'
//       };
  
//       let info2 = {
//         personagem: 'Tio Patinhas',
//         origem: 'Pato Christmas on Bear Mountain',
//         nota: 'O último MacPatinhas',
//         recorrente: 'Sim'
//       };

//       for (let properties in info) {
//          console.log(info[properties] + ' e ' + info2[properties]);
//         }

//6 e 7
// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

//   console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo + '.');
  
//   leitor.livrosFavoritos.push (
//     {
//         titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//         autor: 'JK Rowling',
//         editora: 'Rocco',
//     },
//   );

//   console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos!')
  
//exercicios funções:

// function verificaPalindrome(word){
//     for(index in word){
//       if(word[index] != word[(word.length - 1) - index]){
//         return false;
//       }
//     }
//     return true;
//   }
//   function verificaPalindrome(string) {
//     let reverse = string.split('').reverse().join('');
//     if (reverse === string) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   console.log(verificaPalindrome('arara'));

// function indiceMaior(numeros) {
//     let indiceMaior = 0;
//     for (let indice in numeros){
//         if (numeros[indiceMaior] < numeros[indice]) {
//             indiceMaior = indice;
//           }
//         }
//         return indiceMaior;
//       }
    
//       console.log(indiceMaior([1, 3, 5, 12, 5]));

// function indiceMenor (numeros) {
//     let indiceMenor = 0;
//     for (let indice in numeros) {
//         if (numeros[indiceMenor] > numeros[indice]) {
//         }
//     }
//     return indiceMenor;
// } 

// console.log(indiceMenor([1, 4, 5, 6, 2]))


function maiorPalavra(palavras) {
    let maiorPalavra = palavras[0];
    for (let indice in palavras) {
      if (maiorPalavra.length < palavras[indice].length) {
        maiorPalavra = palavras[indice];
      }
    }
    return maiorPalavra;
  }
  
  console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); //Fernanda