module.exports = (() => {
    const blockScope = () => {
        var x = 1
        var y = 2
        const z = 3
        {
            // var declaration influence to outer scope
            var x = -1
            let y = -2
            const z = -3
        }
        console.log(x)
        console.log(y)
        console.log(z)
    }

    const conditionals = () => {
        let value = true
        if (value) {
            console.log(`Value evaluates to true`)
        } else {
            console.log(`Value evaluates to false`)
        }

        let currentDay = 'Thursday'
        switch (currentDay) {
            case 'Monday': {
                console.log(`Today is ${currentDay}. I will go to a mall`)
                break
            }
            case 'Wednesday': {
                console.log(`Today is ${currentDay}. I will go to a book shop`)
                break
            }
            case 'Tuesday': {
                console.log(`Today is ${currentDay}. I will go to the jam`)
                break
            }
            case 'Thursday': {
                console.log(`Today is ${currentDay}. I will go to the university`)
                break
            }
            case 'Friday': {
                console.log(`Today is ${currentDay}. I will go to a park`)
                break
            }
            case 'Saturday': {
                console.log(`Today is ${currentDay}. I will go to a restaurant`)
                break
            }
            case 'Sunday': {
                console.log(`Today is ${currentDay}. I will not go anywhere. I will be sitting at home.`)
                break
            }
        }
    }

    const errorHandling = () => {
        // finally block will always overwrite the return from catch block
        console.log(`This is testing of the flow inside of try..catch..finally construction:`)

        const foo = () => {
            try {
                console.log(0)
                throw 'Error that have occured inside of try statement'
                console.log(1)
            } catch (err) {
                console.log(2)
                return false
                console.log(3)
            } finally {
                console.log(4)
                return true
                console.log(5)
            }
        }

        const nestedTryCatch = () => {
            try {
                foo()
                throw 'Error thrown from the outer try..catch statement'
            } catch (error) {
                return 'Return from the outer catch'
            } finally {
                return 'Return from the outer finally'
            }
        }

        console.log(nestedTryCatch())
    }

    return { blockScope, conditionals, errorHandling }
})()