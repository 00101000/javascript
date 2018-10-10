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
        //array
        let coffees = ['French Roast', 'Colombian', 'Kona']
        console.log(coffees)
        let fishes = ['Lion', , 'Angel']
        console.log(fishes)
        
        // boolean
        let bool = true
        console.log(bool)

        // numeric
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
})();