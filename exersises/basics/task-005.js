// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

let year = 2012
if (year % 4 != 0) console.log(`it is a common year`)
else if (year % 100 != 0) console.log(`it is a leap year`)
else if (year % 400 != 0) console.log(`it is a common year`)
else console.log(`it is a leap year`)