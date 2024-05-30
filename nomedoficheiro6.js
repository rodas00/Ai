// Utilizar objectos json na array num ficheiro nomedoficheiro6.js
    const brain = require('brainjs');
    const net = new brain.NeuralNetwork();
    
    net.train([
        {input:{entrada1:0, entrada2:0}, output:[0]}, //tentei ver se o output era o problema, não é
        {input:{entrada1:0, entrada2:1}, output:{saida:1}},
        {input:{entrada1:1, entrada2:0}, output:{saida:1}},
        {input:{entrada1:1, entrada2:1}, output:{saida:0}},
    ]);

    // se derem debug e derem hover no net.run na janela vão até output, ele mostra 3 e o primeiro tem o output correto mas por alguma razão os outros tem NaN, é suposto todos
    // terem um valor, os ultimos 2 output arrays devem dar valores entre 1 e 0 tipo 0.912321
    const output00 = parseFloat(

        net.run({entrada1:0, entrada2:0})
    
    ).toFixed(0); // output devia ser 0
    
    const output01 = parseFloat(
    
        net.run({entrada1:0, entrada2:1})
    
    ).toFixed(0); // output devia ser 1
    
    const output10 = parseFloat(
    
        net.run({entrada1:1, entrada2:0})
    
    ).toFixed(0); // output devia ser 1
    
    const output11 = parseFloat(
    
        net.run({entrada1:1, entrada2:1})
    
    ).toFixed(0); // output devia ser 0
    
    console.log('0 xor 0: ' + output00);
    console.log('0 xor 1: ' + output01);
    console.log('1 xor 0: ' + output10);
    console.log('1 xor 1: ' + output11);

// Guardem e testem agora no terminal node nomedoficheiro6