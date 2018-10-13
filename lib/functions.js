module.exports = (() => {

    const recursiveLoop = (idx) => {
        if (idx <= 0) return 0;
        idx--;
        return 1 + recursiveLoop(idx)
    }

    const testRecursiveLoop = () => {
        console.log(recursiveLoop(10))
    }

    const recursion = () => {
        const orgUnits = {
            'headquaters': {
                'CEO': 'Name Surname of the Headquaters\'s CEO',
                'CTO': 'Name Surname of the Headquaters\'s CTO'
            },
            'branches': {
                'franceBranch': {
                    'CEO': 'Name Surname of the CEO in France',
                    'CTO': 'Name Surname of the CTO in France'
                },
                'belgiumBranch': {
                    'CEO': 'Name Surname of the CEO in Belgium',
                    'CTO': 'Name Surname of the CTO in Belgium'
                },
                'germanBranch': {
                    'CEO': 'Name Surname of the CEO in Germany',
                    'CTO': 'Name Surname of the CTO in Germany'
                },
                'norwayBranch': {
                    'CEO': 'Name Surname of the CEO in Norway',
                    'CTO': 'Name Surname of the CTO in Norway'
                },
                'switzerlandBranch': {
                    'CEO': 'Name Surname of the CEO in Switzerland',
                    'CTO': 'Name Surname of the CTO in Switzerland'
                },
                'polandBranch': {
                    'CEO': 'Name Surname of the CEO in Poland',
                    'CTO': 'Name Surname of the CTO in Poland',
                    'secondOffice': {
                        'CEO': 'Name Surname of the CEO in Second Poland Office',
                        'CTO': 'Name Surname of the CTO in Second Poland Office'
                    }
                }
            }
        }

        function getAllNodes(obj, lvl = 0) {
            if (typeof obj !== 'object') return; else lvl++
            for (p in obj) {
                if (typeof obj[p] === 'object') {
                    console.log(`${p} (${lvl} level)`); getAllNodes(obj[p], lvl)
                }
            }
        }

        function getNodesByLevel(obj, level, lvl = 0) {
            if (typeof obj !== 'object') return; else lvl++
            for (p in obj) {
                if (typeof obj[p] === 'object') {
                    if (lvl === level) console.log(`${p} (${lvl} level)`)
                    getNodesByLevel(obj[p], level, lvl)
                }
            }
        }

        function getAllEmployees(obj) {
            for (p in obj) {
                if (typeof obj[p] !== 'object') {
                    console.log(`${p}: ${obj[p]}`)
                } else getAllEmployees(obj[p])
            }
        }

        console.log(`\n\nGet all nodes:`)
        getAllNodes(orgUnits)
        console.log(`\n\nGet all nodes by level 2:`)
        getNodesByLevel(orgUnits, 2)
        console.log(`\n\nGet all employees:`)
        getAllEmployees(orgUnits)
    }

    const multiNestedScope = () => {
        function f1(a) {
            function f2(b) {
                function f3(c) {
                    console.log(`${a}; ${b}; ${c};`)
                }
                f3(3)
            }
            f2(2)
        }
        f1(1)
    }

    const closures = () => {
        function addition(a) {
            function innerFunction(b) {
                return a + b
            }
            return innerFunction
        }

        let addThree = addition(3)
        console.log(addThree(2))
    }

    const functionArgumentsAndRestParameters = () => { 
        function f(){
            if (arguments.length > 0) {
                let s = 0
                for (let i = 0; i < arguments.length; i++) {
                    s += arguments[i];
                }
                return s
            }
        }

        function rest(...args){
            if (args.length > 0) {
                let s = 0
                for (let i = 0; i < args.length; i++) {
                    s += args[i];
                }
                return s
            }
        }

        console.log(f(1, 2, 3))
        console.log(rest(1, 2, 3))
    }

    const predefinedFunctionsUdage = () => {
        let a = 1, b =2
        console.log(`eval(a + b) = ${eval('a + b')}`)
        console.log('')
        console.log(`isFinite(1/0) = ${isFinite(1/0)}`)
        console.log(`isFinite(1/2) = ${isFinite(1/2)}`)
        console.log(`isFinite('text') = ${isFinite('text')}`)
        console.log('')
        console.log(`isNaN(435) = ${isNaN(435)}`)
        console.log(`isNaN('text') = ${isNaN('text')}`)
        console.log('')
        console.log(`parseFloat('123.21') = ${parseFloat('123.21')}`)
        console.log('')
        console.log(`parseInt('123.21') = ${parseInt('123.21')}`)
        console.log('')
        let uri = 'https://host.com/api/getValues?value=значение'
        console.log(`Original URI = ${uri}`)
        console.log(`Encoded URI = ${encodeURI(uri)}`)
        console.log(`Decoded encoded URI = ${decodeURI(encodeURI(uri))}`)
    }

    return {
        testRecursiveLoop,
        multiNestedScope,
        recursion,
        closures,
        functionArgumentsAndRestParameters,
        predefinedFunctionsUdage
    }
})()