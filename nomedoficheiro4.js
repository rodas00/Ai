//Executar a 1ª rede neutral - Ensinar a lógica dos operadores not, num ficheiro “nomedoficheiro4.js”
const brain = require('brainjs');
const net = new brain.NeuralNetwork();
net.train([
{input:[0], output:[1]},
{input:[1], output:[0]}
]);
const output00 = parseFloat(net.run([0])).toFixed(0);
const output01 = parseFloat(net.run([1])).toFixed(0);
console.log('not 0: ' + output00);
console.log('not 1: ' + output01);
// Guardem e testem agora no terminal node nomedoficheiro4