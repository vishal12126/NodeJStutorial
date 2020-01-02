const readLine = require('readline');
const r1 = readLine.createInterface({input: process.stdin,
                           output: process.stdout});


let num1 = Math.floor((Math.random() *10) + 1);
let num2 = Math.floor((Math.random() *10) + 1);

let answer = num1 + num2;
r1.question(`what is ${ num1 } + ${ num2 }? \n`, (userInput) => {
    if(userInput.trim() == answer) {
        r1.close();
    } else {
        r1.setPrompt('Incorrect response ... Plz try again\n');
        r1.prompt();
        r1.on('line', (userInput) => {
            if(userInput.trim() == answer) {
                r1.close();
            } else {
                r1.setPrompt(`your answer of ${ userInput } is incorrect try again \n`);
                r1.prompt();
            }
        });
    }
});

r1.on('close', () => {
    console.log("correct ans!!!!!");
});
