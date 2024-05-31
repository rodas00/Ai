//nomedoficheiro18.js 
// configurações da validação cruzada num ficheiro nomedoficheiro18.js
const brain = require('brain.js');
const data = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] },
];
const networkOptions = { learningRate: 0.05 };
const trainingOptions = { iterations: 10000, errorThresh: 0.004 };
const crossValidate = new brain.CrossValidate(() => new brain.NeuralNetwork, networkOptions);
crossValidate.train(data, trainingOptions);
const json = crossValidate.toJSON();
const net = crossValidate.toNeuralNetwork();
console.log(`taxa de erro: ${json.sets[3].error}\niterações: ${json.sets[3].iterations}`);
const output = parseFloat(net.run([0, 1])).toFixed(0);
console.log(`resultado: ${output[0]}`);
//guardem e executem o ficheiro