module.exports = (()=>{
    /*
    I'm intentially skiping most of the assigment, 
    comparasion, arithmenthic, bitwise, logical and 
    conditional operators since they are the same as
    in the other C-family programming langauges
    */

    const deleteOperator = () => {
        let obj = {
            a: 'value',
            b: 455,
            c: true
        }
        console.log(JSON.stringify(obj, null, 100))
        delete obj.b
        console.log(JSON.stringify(obj, null, 100))
    }

    const typeofOperator = () => {
        let a = 123,
        b = true,
        c = 'text',
        d = { a: 0 },
        e = [ 1, 2, 3 ],
        f = new Date()

        console.log(`typeof a is ${typeof a}`)
        console.log(`typeof b is ${typeof b}`)
        console.log(`typeof c is ${typeof c}`)
        console.log(`typeof d is ${typeof d}`)
        console.log(`typeof e is ${typeof e}`)
        console.log(`typeof f is ${typeof f}`)
        console.log(`typeof g is ${typeof g}`)
    }

    const inOperator = () => {
        let arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        let obj = {
            a: 213,
            b: true,
            c: 'some text value',
            d() {
                console.log(`Hello world`)
            }
        }
        'length' in arr ? console.log(`length is in arr`) : console.log(`length is not in arr`) 
        'Monday' in arr ? console.log(`Monday is in arr`) : console.log(`Monday is not in arr`)
        '3' in arr ? console.log(`3 is in arr`) : console.log(`3 is not in arr`)        
    }

    const instanceOfOperator = () => {
        let date = new Date()
        if (date instanceof Date) console.log(`date has type Date`)
    }

    return {
        deleteOperator,
        typeofOperator,
        inOperator,
        instanceOfOperator
    }
})()