module.exports = (function(){

    // declarations
    var a = ''
    const b = 3
    let c = true

    const declarationTest = () => {
        var a
        console.log(`the value of a is ${a}`)

        console.log(`the value of b is ${b}`)
        var b

        let c
        console.log(`the value of c is ${c}`)

        // Reference Error: console.log(`the value of c is ${d}`)
        let d

        // Reference Error: console.log(`the value of f is ${f}`)
    }

    const varDeclarationTest = () => {
        console.log(x === undefined)
        var x
    }

    const dataTypeConversion = () => {
        let a = 'Alex\'s age is ' + 45
        console.log(a)

        let b = '37' - 5
        console.log(b)

        let c = '37' + 5
        console.log(c)
    }

    const literals = () => {
        // array
        let coffees = ['French Roast', 'Colombian', 'Kona']
        console.log(coffees)
        let fishes = ['Lion', , 'Angel']
        console.log(fishes)
        
        // boolean
        let bool = true
        console.log(bool)

        // numeric
        let dec = 16
        let oct = 0o20
        let hex = 0x10
        let bin = 0b10000

        console.log(`dec in decimals is ${dec}`)
        console.log(`oct in decimals is ${oct}`)
        console.log(`hex in decimals is ${hex}`)
        console.log(`bin in decimals is ${bin}`)

        // object
        let obj = {
            dec,
            toString() {
                console.log(`This is object. It has property dec = ${obj.dec}`)
            },
            anotherMethod(a) {
                console.log(`This is another method of the object. It can output a value of its argument. a = ${a}`)
            },
            ['prop_' + (()=>2)()]: 'Value of the property with dynamicaly evaluated name'
        }

        obj.toString()
        obj.anotherMethod(432)
        console.log(obj.prop_2)

        // regexp
        let re = /ab+c/

        // string
        let oneString = `In JavaScript '\/n' is a line-feed.`
        
        let multilineString = 
`In JavaScript template strings can run
over multiple lines, but double and single
quoted strings cannot.`
        
        let name = 'Bob', time = 'today'
        let stringInterpolation = `Hello ${name}, how are you ${time}?`

        console.log(oneString); console.log(multilineString); console.log(stringInterpolation)

    } 
    
    return {
        a,
        b,
        c,
        declarationTest,
        varDeclarationTest,
        dataTypeConversion,
        literals
    }
})()