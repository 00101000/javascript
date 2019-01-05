/*
Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Tuesday. 
Current time is : 10 PM : 30 : 38
*/

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
function hoursConvertor(hours) {
    if (hours > 12) return `${hours-12} PM`
    return `${hours} AM`
}

let dt = new Date()
let cDay = dt.getDay()
let cHours = hoursConvertor(dt.getHours())
let cMinutes = dt.getMinutes()
let cSeconds = dt.getSeconds()

console.log(`Today is : ${daysOfWeek[cDay-1]}. \nCurrent time is : ${cHours} : ${cMinutes} : ${cSeconds}`)