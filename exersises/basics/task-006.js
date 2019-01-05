// calculate age

let dateOfBirth = new Date('10-13-2012')
let currentDate = new Date()
let age = Math.trunc((currentDate.getTime() - dateOfBirth.getTime()) / (1000 * 60 * 60 * 24 * 365))

console.log(`Age is ${age}`)