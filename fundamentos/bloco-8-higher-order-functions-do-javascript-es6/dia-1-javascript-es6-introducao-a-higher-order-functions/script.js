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

