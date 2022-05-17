//questão 1

// let fatorial = 10;
// let resultado = fatorial

// for (index = 1; index < fatorial; index +=1){
//     resultado = index * resultado
// }

// console.log(resultado)

//questão 2

// let word = "trybe";

// let reverterWord = '';

// reverterWord = word.split('').reverse().join('');

// console.log(reverterWord);

//questão 3
// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let maiorPalavra = array[0];
// let menorPalavra = array[0];

// for (let index = 0; index < array.length; index +=1){
//     if (array[index].length > maiorPalavra.length) {
//         maiorPalavra = array[index];
//     }
// }

// for (let index = 0; index < array.length; index +=1){
//     if (array[index].length < menorPalavra.length) {
//         menorPalavra = array[index];
//     }
// }

// console.log(maiorPalavra)
// console.log(menorPalavra)

//questão 4

let numeroPrimo = 0;


for (index = 1; index < 51; index +=1) {
    let ePrimo = true
    for (var numeroMenor = 2; numeroMenor < index; numeroMenor +=1){
        if (index % numeroMenor === 0){
            ePrimo = false;
        }
    }
        if (ePrimo) {
            numeroPrimo = index;
    }

}
console.log(numeroPrimo)