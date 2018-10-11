module.exports = (()=>{
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

    let errorHandling = () => {
        
        try {
            
        } catch (err)
        {

        } finally {

        }
    }

    return {blockScope, conditionals, errorHandling}
})()