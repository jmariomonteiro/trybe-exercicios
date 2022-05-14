//Exercicio 4
//const numero = 10;

//if (numero > 0) {
  //  console.log ("positive");
//} else if (numero = 0) {
  //  console.log("zero")
//} else {
//    console.log("negative");
//}

//exercicio 5
const anguloA = 30;
const anguloB = 45;
const anguloC = 60;

const soma = anguloA + anguloB + anguloC
const anguloValido = anguloA > 0 && anguloB > 0 && anguloC > 0

if (anguloValido)
    if (soma === 180) {
        console.log("true");
    } else {
        console.log("false");
}
else {
    console.log("Erro: angulo inválido");
}
