// const createEmployees = (name) => {
//     const email = name.toLowerCase().split(' ').join('_').normalize('NFD').replace(/[\u0300-\u036f]/g, "");
//     return name =  {name, email: `${email}@trybe.com`};
// };

// const newEmployess = (callback) => {
//     const employess = {
//         id1: callback('José Mário'),
//         id2: callback('Letícia'),
//         id3: callback('Mayara'),
//     };
//     return employess
// };

//2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const sorteio = (numeroApostado, numeroAleatorio) => {
    const sorteado = Math.floor(Math.random() * 5 + 1);
    return resultado(numeroApostado, numeroAleatorio)
};

const resultado = (sorteado, callback) => {
    if (sorteado === callback) {
        return 'Parabéns, você foi escolhido!'
    } else {
        return 'Tente novamente!'
    }
}
console.log(sorteio(2, resultado));
// console.log(newEmployess(createEmployees));

// const checkNumber = (myNumber, number2) => myNumber === number2

// const resultado = (myNumber, callback) => {
//     const number2 = Math.floor(Math.random() * 5 + 1)
//     return callback(myNumber, number2) ? 'Lucky day, you won!' : 'Try Again!';
// };

// console.log(resultado(2, checkNumber));

const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostaEstudante = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const respostas = (gabarito, respostaEstudante) => {
    if (gabarito === respostaEstudante) {
        return 1;
    } else if (respostaEstudante === 'N.A') {
        return 0;
    } else {
        return -0,5;
    }
};

const compareRespostas = (gabarito, respostaEstudante, comparar) => {
    let resultado = 0;
    for (let index = 0; index < gabarito.length; index += 1) {
        const compararReturn = comparar(gabarito[index], respostaEstudante[index])
        resultado += compararReturn
    };
    return `Resultado final ${resultado} pontos`
};

console.log(compareRespostas(gabarito, respostaEstudante, respostas))

