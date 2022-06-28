const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
  ];
  
  // escreva filterPeople abaixo
  //Escreva uma função filterPeople 
  //que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:

//   const filterPeople = (array) => array.filter(
//     ({bornIn, nationality}) =>
//     bornIn < 2000
//     && nationality === 'Australian',
//   );

//   console.log(filterPeople())

// const myList = [1, 2, 3];

// const swap = ([a, b, c]) => [c, b, a];

// console.log(swap(myList))

// const palio = ['Palio', 'Fiat', 2019];
// const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
// const chiron = ['Chiron', 'Bugatti', 2016];

// // escreva toObject abaixo

// const toObject = ([carro, marca, ano]) => ({carro, marca, ano})

// console.log(toObject(palio));

// const ships = [
//     {
//       name: 'Titanic',
//       length: 269.1,
//       measurementUnit: 'meters',
//     },
//     {
//       name: 'Queen Mary 2',
//       length: 1132,
//       measurementUnit: 'feet',
//     },
//     {
//       name: 'Yamato',
//       length: 256,
//       measurementUnit: 'meters',
//     },
//   ];
  
//   // escreva shipLength abaixo

//   const shipLength = ({name, length, measurementUnit}) => {
//       return `${name} is ${length} ${measurementUnit} long`;
//   }

  
//   console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
//   console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
//   console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'

// escreva greet abaixo
// const greet = (nome, mensagem = 'Hi') => `${nome} ${mensagem}`

// console.log(greet('John')) // 'Hi John'
// console.log(greet('John', 'Good morning')) // 'Good morning John'

// const greet2 = (name, msg) => `${msg} ${name}`
// console.log(greet2('Isabela', 'Oi')) // 'Oi Isabela'


// const yearSeasons = {
//     spring: ['March', 'April', 'May'],
//     summer: ['June', 'July', 'August'],
//     autumn: ['September', 'October', 'November'],
//     winter: ['December', 'January', 'February'],
//   };

// const {spring, summer, autumn, winter} = yearSeasons;

// const meses = [...spring, ...summer, ...autumn, ...winter];

// console.log(meses)