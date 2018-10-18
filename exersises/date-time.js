
module.exports = (() => {
    let dateTimeExercises = []
    dateTimeExercises[0] = () => {
        /*
        * Write a JavaScript program to display the current day and time in the following format.
        * Sample Output : Today is : Tuesday. 
        * Current time is 10 PM : 30 : 38
        */
        let dt = new Date()
        let dayOfWek = daysOfWeek.get(dt.getDay())
        let hours = dt.getHours() > 12 ? (dt.getHours() - 12) + ' PM' : dt.getHours() + ' AM'
        hours = pad(hours)
        let minutes = pad(dt.getMinutes())
        let seocnds = pad(dt.getSeconds())
        console.log(`Today is ${dayOfWek}. Current time is ${hours} : ${minutes} : ${seocnds}`)
    }

    dateTimeExercises[1] = () => {
        /*
        * Write a JavaScript program to get the current date.
        * Expected Output : 
        * mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
        */
        let dt = new Date()
        let mm = pad(dt.getMonth())
        let dd = pad(dt.getDate())
        let yyyy = dt.getFullYear()
        console.log(`${mm}-${dd}-${yyyy}`)
        console.log(`${mm}/${dd}/${yyyy}`)
        console.log(`${dd}-${mm}-${yyyy}`)
        console.log(`${dd}/${mm}/${yyyy}`)
    }

    dateTimeExercises[2] = () => {
        /*
        * Write a JavaScript function to check whether an `input` is a date object or not.
        * Test Data :
        * console.log(isDateObject("October 13, 2014 11:13:00")); 
        * console.log(isDateObject(new Date(86400000))); 
        * console.log(isDateObject(new Date(99,5,24,11,33,30,0))); 
        * console.log(isDateObject([1, 2, 4, 0]));
        * Output :
        * false 
        * true 
        * true 
        * false
        */

       const isDateObject = (obj) => {
           if (obj instanceof Date) return true
           return false
       }

       console.log(isDateObject("October 13, 2014 11:13:00")); 
       console.log(isDateObject(new Date(86400000))); 
       console.log(isDateObject(new Date(99,5,24,11,33,30,0))); 
       console.log(isDateObject([1, 2, 4, 0]));
    }
    return {
        dateTimeExercises
    }
})()

const daysOfWeek = new Map([
    [1, 'Monday'],
    [2, 'Tuesday'],
    [3, 'Wednesday'],
    [4, 'Thursday'],
    [5, 'Friday'],
    [6, 'Saturday'],
    [7, 'Sunday']
])

const pad = (number) => {
    return number.toString().padStart(2,0)
}