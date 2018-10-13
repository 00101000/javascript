module.exports = (()=>{
    
    const numberObjectUsage = () => {
        console.log(`\nNumber's properties:\n`)
        console.log(`Number.MAX_VALUE = ${Number.MAX_VALUE}`)
        console.log(`Number.MIN_VALUE = ${Number.MIN_VALUE}`)
        console.log(`Number.NaN = ${Number.NaN}`)
        console.log(`Number.NEGATIVE_INFINITY = ${Number.NEGATIVE_INFINITY}`)
        console.log(`Number.POSITIVE_INFINITY = ${Number.POSITIVE_INFINITY}`)
        console.log(`Number.EPSILON = ${Number.EPSILON}`)
        console.log(`Number.MAX_SAFE_INTEGER = ${Number.MAX_SAFE_INTEGER}`)
        console.log(`Number.MIN_SAFE_INTEGER = ${Number.MIN_SAFE_INTEGER}`)
        console.log(`\nNumber's methods:\n`)
        console.log(`Number.parseFloat('3.141592654') = ${Number.parseFloat('3.141592654')}`)
        console.log(`Number.parseInt('3.141592654') = ${Number.parseInt('3.141592654')}`)
        console.log(`Number.isFinite('3.141592654') = ${Number.isFinite('3.141592654')}`)
        console.log(`Number.isInteger('3.141592654') = ${Number.isInteger('3.141592654')}`)
        console.log(`Number.isNaN('3.141592654') = ${Number.isNaN('3.141592654')}`)
        console.log(`Number.isSafeInteger('3.141592654') = ${Number.isSafeInteger('3.141592654')}`)
    }
    
    const mathObjectUsage = () => {
        console.log(`Math.abs(-3.141592654) = ${Math.abs(-3.141592654)}`)
        console.log(`Math.sin(90) = ${Math.sin(90)}, Math.cos(90) = ${Math.cos(90)}, Math.tan(90) = ${Math.tan(90)}`)
        console.log(`Math.asin(0.893) = ${Math.asin(0.893)}, Math.acos(-0.448) = ${Math.acos(-0.448)}, Math.atan(-1.995) = ${Math.atan(-1.995)}`)
        console.log(`Math.sinh(90) = ${Math.sinh(90)}, Math.cosh(90) = ${Math.cosh(90)}, Math.tanh(90) = ${Math.tanh(90)}`)
        console.log(`Math.asinh(90) = ${Math.asinh(90)}, Math.acosh(90) = ${Math.acosh(90)}, Math.atanh(90) = ${Math.atanh(90)}`)
        console.log(`Math.pow(2, 3) = ${Math.pow(2, 3)}`)
        console.log(`Math.exp(1) = ${Math.exp(1)}`)
        console.log(`Math.expm1(1) = ${Math.expm1(1)}`)
        console.log(`Math.log10(1000000) = ${Math.log10(1000000)}`)
        console.log(`Math.log1p(8) = ${Math.log1p(8)}`)
        console.log(`Math.log2(8) = ${Math.log2(8)}`)
        console.log(`Math.floor(3.141592654) = ${Math.floor(3.141592654)}`)
        console.log(`Math.ceil(3.141592654) = ${Math.ceil(3.141592654)}`)
        console.log(`Math.min(32, 5.245, 3.141592654, 4, 5, 435, -3.141592654)  =  ${Math.min(32, 5.245, 3.141592654, 4, 5, 435, -3.141592654)}`)
        console.log(`Math.max(32, 5.245, 3.141592654, 4, 5, 435, -3.141592654)  =  ${Math.max(32, 5.245, 3.141592654, 4, 5, 435, -3.141592654)}`)
        console.log(`Math.random() = ${Math.random()}`)
        console.log(`Math.round(2.54) = ${Math.round(2.54)}`)
        console.log(`Math.fround(2.54) = ${Math.fround(2.54)}`)
        console.log(`Math.trunc(2.54) = ${Math.trunc(2.54)}`)
        console.log(`Math.sqrt(4) = ${Math.sqrt(4)}`)
        console.log(`Math.cbrt(8) = ${Math.cbrt(8)}`)
        console.log(`Math.hypot(3,4) = ${Math.hypot(3,4)}`)
        console.log(`Math.sign(-5) = ${Math.sign(-5)} and Math.sign(5) = ${Math.sign(5)}`)
    }

    const dateObjectUsage = () => {
        console.log(`\nInitialization of the date value:\n`)
        let currentDate = new Date()
        console.log(currentDate)
        let dt1 = new Date(new Date())
        console.log(dt1)
        let dt2 = new Date('1985-05-30')
        console.log(dt2)
        let dt3 = new Date('30-05-1985') // Invalid format
        console.log(dt3)
        let dt4 = new Date(1985, 5, 30, 15, 58, 52, 468)
        console.log(dt4)
        
        /*
        "set" methods, for setting date and time values in Date objects.
        "get" methods, for getting date and time values from Date objects.
        "to" methods, for returning string values from Date objects.
        parse and UTC methods, for parsing Date strings
        */

    }

    return {
        numberObjectUsage,
        mathObjectUsage,
        dateObjectUsage
    }
})()