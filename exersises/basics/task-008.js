/*
* Write a JavaScript program where the program takes a random integer between 1 to 10, 
* the user is then prompted to input a guess number. If the user input matches with 
* guess number, the program will display a message "Good Work" otherwise display 
* a message "Not matched".
*/

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
})

let random = Math.trunc(Math.random()*10+1); 
let guess = 0;

rl.question('Input a guess number betwween 1 and 10: ', (num) => {
    guess = num
    console.log(`The random number is: ${random}`)
    if (random == guess) console.log(`Good Work`) 
    else console.log(`Not matched`)
    rl.close()
})