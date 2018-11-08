module.exports = (() => {
    let exercises = []

    exercises[0] = (number) => {
        /*
        * Write a JavaScript function to humanized number 
        * (Formats a number to a human-readable string.) with 
        * the correct suffix such as 1st, 2nd, 3rd or 4th.
        * Test Data :
        * console.log(humanize_format()); 
        * console.log(humanize_format(1)); 
        * console.log(humanize_format(8)); 
        * console.log(humanize_format(301)); 
        * console.log(humanize_format(402));
        */
        let numToString = number.toString()
        let lastChar = numToString[numToString.length - 1]
        switch (lastChar) {
            case '1': {
                console.log(`${number}st`)
                break
            }
            case '2': {
                console.log(`${number}nd`)
                break
            }
            case '3': {
                console.log(`${number}rd`)
                break
            }
            default: {
                console.log(`${number}th`)
            }
        }
    }

    return exercises
})()