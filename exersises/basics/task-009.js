// Write a JavaScript program to calculate days left until next Christmas

const currentDate = new Date()

let currentYearChristmassDay = new Date('01-07-' + currentDate.getFullYear())
let nextYearChristmassDay = new Date('01-07-' + (currentDate.getFullYear() + 1))
let cmas = undefined

if (currentDate < currentYearChristmassDay) cmas = currentYearChristmassDay
else cmas = nextYearChristmassDay

let daysLeft = Math.trunc((currentDate.getTime() - cmas.getTime()) / (1000 * 60 * 60 * 24))

console.log(`Until the next Christmas left ${daysLeft} days`)