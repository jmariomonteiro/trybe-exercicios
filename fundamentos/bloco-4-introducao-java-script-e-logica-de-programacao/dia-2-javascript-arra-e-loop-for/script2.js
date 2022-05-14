//vamos aplicar
//1
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//     for ( let index = 0; index < numbers.length; index +=1){
//         console.log(numbers[index]);
//     }

//2

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for (let index = 0; index < numbers.length; index +=1){
//     soma += numbers[index];
// }
//     console.log(soma);

//3

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;
// let media;

// for (let index = 0; index < numbers.length; index +=1){
//      soma += numbers[index];
//      media = soma / (index+1);
// }

// console.log(media);

//4

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;
// let media;

// for (let index = 0; index < numbers.length; index +=1){
//      soma += numbers[index];
//      media = soma / (index+1);
// }


// if (media > 20) {
//     console.log ("Valor maior que 20");
// } else {
//     console.log("Valor melhor que 20")
// }

//5

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let Maior = numbers[0];


// for (let index = 0; index < numbers.length; index +=1){
//     if (numbers[index] > Maior) {
//        Maior = numbers[index];
//     }
// }

// console.log(Maior)

//6
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let impar = 0;

// for (let index = 0; index < numbers.length; index +=1) {
//     if ( numbers[index]  % 2 !== 0) {
//         impar +=1;
//     }
//     if (impar === 0) {
//         console.log("Não tem numero ímpar!")
//     } else {
//         console.log(impar)
//     }
// }

//7

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let Menor = numbers[0];


// for (let index = 0; index < numbers.length; index +=1){
//     if (numbers[index] < Menor) {
//        Menor = numbers[index];
//     }
// }

// console.log(Menor)

//8

// let novosNumero = [];

// for (let index = 1; index < 25; index +=1) {
//     novosNumero.push(index);
// }

// console.log(novosNumero);

//9

let novosNumero = [1,  2,  3,  4,  5,  6,  7,  8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
];


for (let index = 0; index < novosNumero.length; index +=1) {
   console.log(novosNumero[index] / 2)
}



