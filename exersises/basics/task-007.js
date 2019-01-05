// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050
for (let i = 2014; i <= 2050; i++) {
    let checkDate = new Date('01-01-' + i)
    if (checkDate.getDay() == 0) console.log(checkDate.toString())
}