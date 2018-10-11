module.exports = (() => {

    var daysOfWeek = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Satursday',
        'Sunday'
    ]

    const loops = () => {
        for (let i = 0; i < daysOfWeek.length; i++) {
            console.log(daysOfWeek[i])
        }

        console.log(`-------------`)
        
        let i = 0;
        do {
            console.log(daysOfWeek[i])
            i++;
        } while (i < daysOfWeek.length)
        
        console.log(`-------------`)
        
        i = 0
        while (i < daysOfWeek.length) {
            i++
            console.log(daysOfWeek[i])
        }

        console.log(`-------------`)

        for (idx in daysOfWeek) {
            console.log(idx)
        }

        console.log(`-------------`)

        for (el of daysOfWeek) {
            console.log(el)
        }

        console.log(`-------------`)

        let s = 0; i = 1
        do {
            if (i % 2 == 0) continue
            s += i
        } while (i > 5)
        
        console.log(s)
    }

    return {
        loops
    }
})()