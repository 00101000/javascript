module.exports = (() => {
    const initialization = () => {
        let a1 = new Array(1, 2, 3, 4)
        let a2 = Array(1, 2, 3, 4)
        let a3 = [1, 2, 3, 4]
        console.log(`a1 = ${a1}\na2 = ${a2}\na3 = ${a3}`)

        // array quirk:
        let a4 = new Array(3)
        let a5 = Array(4)
        console.log(`a4[0] = ${a4[0]}`)
        console.log(`a5[0] = ${a5[0]}`)
        console.log(`a4.length = ${a4.length}`)
        console.log(`a5.length = ${a5.length}`)
    }

    const accessingElements = () => {
        let arr = [1, 4, 54, 4]
        console.log(`arr[1] = ${arr[1]}`)

        // array quirk (lenght = last idx + 1 and not the amount of elements):
        arr[30] = 1
        console.log(arr.length)
    }

    const arrayObjectMethods = () => {
        let arr = [1, 24, 54, 45, 68, 7, 6, 465, 5, -5, 54, -42, 65, -4, 95, -7]
        let arr2 = Array.of(2, 3)
        console.log(`arr = ${arr}\narr2 = ${arr2}`)
        console.log(`concat(arr2) = ${arr.concat(arr2)}`)
        console.log(`copyWithin(0, 2, 3) = ${arr.copyWithin(0, 2, 3)}`)
        console.log(`every(x =>typeof x === 'number') = ${arr.every(x => typeof x === 'number')}`)
        console.log(`some(x => x < 0) = ${arr.some(x => x < 0)}`)
        console.log(`fill(999, 0, 3) = ${arr.fill(999, 0, 3)}`)
        console.log(`filter(x => x === 6) = ${arr.filter(x => x === 6)}`)
        console.log(`find(x => x > 4) = ${arr.find(x => x > 4)}`)
        console.log(`findIndex(x => x > 4) = ${arr.findIndex(x => x > 4)}`)
        let summ = 0
        arr.forEach(x => summ += x)
        console.log(`forEach(x => summ += x) = ${summ}`)
        console.log(`reduce((p, c) => p + c) = ${arr.reduce((p, c) => p + c)}`)
        console.log(`includes(-5) = ${arr.includes(-5)}`)
        console.log(`indexOf(54) = ${arr.indexOf(54)}`)
        console.log(`lastIndexOf(-4) = ${arr.lastIndexOf(-4)}`)
        console.log(`join(' : ') = ${arr.join(' : ')}`)
        console.log(`map(x - 10000) = ${arr.map(x => x - 10000)}`)
        arr.pop()
        console.log(`pop() = ${arr}`)
        arr.push(1000000)
        console.log(`push(1000000) = ${arr}`)
        console.log(`reverse() = ${arr.reverse()}`)
        arr.shift()
        console.log(`shift() = ${arr}`)
        arr.unshift(846)
        console.log(`unshift(846) = ${arr}`)
        slice(5, 8)
        console.log(`slice(5, 8) = ${arr}`)
        arr.splice(1, 2)
        console.log(`splice(1, 2) = ${arr}`)
        console.log(`sort() = ${arr.sort()}`)
    }

    return {
        initialization,
        accessingElements,
        arrayObjectMethods
    }
})()