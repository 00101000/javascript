// Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

let string = 'Abc def ghi'

let position = 5

string = string.substring(0, position) + string.substring(position + 1, string.length)

console.log(string)