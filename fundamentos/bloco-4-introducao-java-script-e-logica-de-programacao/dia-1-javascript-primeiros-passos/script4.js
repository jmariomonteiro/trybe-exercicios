//questão 7
//const nota = 80;

//if (nota > 100 || nota < 0){
  //  console.log("Error");
//} else if (nota >= 90) {
  //  console.log ("nota A");
//} else if (nota >= 80) {
  //  console.log ("nota B");
//} else if (nota >= 70) {
  //  console.log("nota C");
//} else if (nota >= 60) {
   // console.log ("nota D");
//} else if (nota >= 50) {
  //  console.log("nota E");
//} else {
  //  console.log("nota F");
//}

//questão 8

//const numero1 = 1;
//const numero2 = 3;
//const numero3 = 5;



//if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0) {
 //   console.log("true")
//} else {
//    console.log("false");
//}    

//questão 9
//const a = 2;
//const b = 6;
//const c = 8;

//if (a % 2 !== 0 || b % 2 !==0 || c % 2 !== 0) {
//    console.log("true");
//} else {
//    console.log("false");
//}

//Questão 10

//const custo = 90;
//const venda = 140;

//const imposto = custo * 1.2;
//const lucro = (venda - imposto) * 1000

//if ( custo >= 0 && venda >= 0) {
//    console.log(lucro);
//} else {
//    console.log("Error, os valores não podem ser negativos")
//}

//Questão 11

let aliquotaINSS;
let aliquotaIR;

let salarioBruto = 5000.00;

if (salarioBruto <= 1556.94) {
    aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    aliquotaINSS = salarioBruto * 0.11;
} else {
    aliquotaINSS = 570.88;
};

let salarioBase = salarioBruto - aliquotaINSS

if (salarioBase <= 1903.98){
    aliquotaIR = 0;
} else if (salarioBase <= 2826.65){
    aliquotaIR = (salarioBase * 0,075) - 142.80;
} else if (salarioBase <= 3751.05){
    aliquotaIR = (salarioBase * 0,15) - 354.80;
} else if (salarioBase <= 4664.68){
    aliquotaIR = (salarioBase * 0,225) - 636.13;
} else {
    aliquotaIR = (salarioBase * 0,275) - 869.36;
};

console.log ( "Salário Líquido: " + ( salarioBase - aliquotaIR))