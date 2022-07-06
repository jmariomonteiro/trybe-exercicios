// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// // crie a função sendMarsTemperature abaixo
// const sendMarsTemperature = () => {
//     const temp = getMarsTemperature()
//     return setTimeout(() => console.log(`Mars temperature is: ${temp} degree Celsius`), 5000);
// };
// poderia utilizar o nome da função dentro do template literals em vez da constante que criei
// poderia utilizar a função messageDelay no lugar de 5000.
// sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...
const sendMarsTemperature = (callback) => {
    const temp = getMarsTemperature()
    return setInterval(() => callback(temp), 3000);
}

sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo