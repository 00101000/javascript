// Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the first number : ', (answer1) => {
    rl.question('Please enter the second number : ', (answer2) => {
        let multiplication = answer1 * answer2
        let divisionFirst = (answer1 / answer2).toFixed(2)
        let divisionSecond = (answer2 / answer1).toFixed(2)
        console.log(`The multiplication of above two numbers is ${multiplication}`);
        console.log(`The division of the first number by the second one is ${divisionFirst}`);
        console.log(`The division of the second number by the first one is ${divisionSecond}`);
        rl.close();
    });
});