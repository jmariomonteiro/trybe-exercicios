const peça = "rainha";

switch (peça) {
    case "peão":
        console.log("move uma casa para frente");
        break;
    case "bispo":
        console.log("move em linha diagonal");
        break;
    case "torre":
        console.log("move em linha reta verticalmente e horizontalmente");
    break;
    case "cavalo":
        console.log("move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto");
    break;
    case "rainha":
        console.log("move-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente");
    break;
    case "rei":
        console.log("move-se para qualquer casa adjacente");
    break;
    default:
        console.log("peça não existe");
}