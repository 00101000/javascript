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
       hours = hours.toString().padStart(2, 0)
       let minutes = dt.getMinutes().toString().padStart(2, 0)
       let seocnds = dt.getSeconds().toString().padStart(2, 0)
       console.log(`Today is ${dayOfWek}. Current time is ${hours} : ${minutes} : ${seocnds}`)
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