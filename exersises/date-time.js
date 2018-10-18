const utils = require('../utils/utils')

module.exports = (() => {
    let dateTimeExercises = []
    dateTimeExercises[0] = () => {
        /*
        * Write a JavaScript program to display the current day and time in the following format.
        * Sample Output : Today is : Tuesday. 
        * Current time is 10 PM : 30 : 38
        */
        let dt = new Date()
        let dayOfWek = utils.daysOfWeek.get(dt.getDay())
        let hours = dt.getHours() > 12 ? (dt.getHours() - 12) + ' PM' : dt.getHours() + ' AM'
        hours = utils.pad(hours)
        let minutes = utils.pad(dt.getMinutes())
        let seocnds = utils.pad(dt.getSeconds())
        console.log(`Today is ${dayOfWek}. Current time is ${hours} : ${minutes} : ${seocnds}`)
    }

    dateTimeExercises[1] = () => {
        /*
        * Write a JavaScript program to get the current date.
        * Expected Output : 
        * mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
        */
        let dt = new Date()
        let mm = utils.pad(dt.getMonth())
        let dd = utils.pad(dt.getDate())
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
        * console.log(isDateObject("October 13, 2014 11:13:00")) 
        * console.log(isDateObject(new Date(86400000))) 
        * console.log(isDateObject(new Date(99,5,24,11,33,30,0))) 
        * console.log(isDateObject([1, 2, 4, 0]))
        * Output :
        * false 
        * true 
        * true 
        * false
        */

        // const isDateObject = (obj) => {
        //     if (obj instanceof Date) return true
        //     return false
        // }

        console.log(isDateObject("October 13, 2014 11:13:00"))
        console.log(isDateObject(new Date(86400000)))
        console.log(isDateObject(new Date(99, 5, 24, 11, 33, 30, 0)))
        console.log(isDateObject([1, 2, 4, 0]))
    }

    dateTimeExercises[3] = () => {
        /*
        * Write a JavaScript function to get the number of days in a month. Go to the editor
        * 
        * Test Data :
        * console.log(getDaysInMonth(1, 2012)) 
        * console.log(getDaysInMonth(2, 2012)) 
        * console.log(getDaysInMonth(9, 2012)) 
        * console.log(getDaysInMonth(12, 2012)) 
        * Output :
        * 31 
        * 29 
        * 30 
        * 31
        */

        const getDaysInMonth = (month, year) => {
            month--
            let dt = new Date(year, (month), 27)
            let daysInMonth = 0
            while (dt.getMonth() == month) {
                daysInMonth = dt.getDate()
                utils.addDays(dt, 1) 
            }
            return daysInMonth
        }

        console.log(getDaysInMonth(1, 2012))
        console.log(getDaysInMonth(2, 2012))
        console.log(getDaysInMonth(9, 2012))
        console.log(getDaysInMonth(12, 2012))
    }
    return {
        dateTimeExercises
    }
})()